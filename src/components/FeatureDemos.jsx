import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";

const demoTemplates = [
  { id: 1, title: "Employee QR (Demo)", type: "qr", fields: ["name", "employeeId", "position", "department"] },
  { id: 2, title: "Portfolio Q&A Chat", type: "chat" },
  { id: 3, title: "Todo List Demo", type: "todo" },
  { id: 4, title: "Production Line Dashboard", type: "production" },
];

const portfolioQA = [
  { question: "Tell me about yourself.", answer: "I am a Full-stack Developer with hands-on experience building and maintaining enterprise web systems..." },
  { question: "What technologies have you worked with?", answer: "I have experience with Node.js, PHP, ReactJS, MongoDB, MySQL, SQL Server, and integrating payment gateways..." },
  { question: "Can you describe your role at FPT Software?", answer: "At FPT Software, I worked as a Full-stack Developer on multiple outsourcing projects..." },
  { question: "What are your key achievements at FPT Software?", answer: "I contributed to full-stack features including user management, reporting dashboards..." },
  { question: "Tell me about your current work at Thuan Phong Express (J&T).", answer: "Currently, I maintain and develop full-stack internal tools for enterprise operations..." },
  { question: "How do you handle database design and optimization?", answer: "I design and optimize MongoDB, MySQL, and SQL Server schemas for performance..." },
  { question: "How can someone contact you?", answer: "You can reach me via email at vietnh03.work@gmail.com or call me at 0398073861. My GitHub profile is https://github.com/nhviet17112003." }
];

export default function FeatureDemos() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [form, setForm] = useState({});
  const [qr, setQr] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const messagesEndRef = useRef(null);
  const [activeMachine, setActiveMachine] = useState(null);
  const [products, setProducts] = useState([]);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let timer;
    if(activeMachine && activeDemo?.status[activeMachine.idx] === "Running" && products.length > 0){
      timer = setInterval(() => {
        setProducts(prev => {
          const newProducts = [...prev];
          if(newProducts[productIndex] && !newProducts[productIndex].done){
            newProducts[productIndex].done = true;
            setProductIndex((productIndex+1)%newProducts.length);
          }
          return newProducts;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeMachine, products, productIndex, activeDemo?.status]);

  const openDemo = (demo) => {
    if(demo.type === "production") demo = { 
      ...demo, 
      status: ["Idle","Idle","Idle","Idle"],
      machines: ["Machine A","Machine B","Machine C","Machine D"]
    };
    setActiveDemo(demo);
    setQr(""); setMessages([]); setInput(""); setTasks([]); setTaskInput("");
    setSuggestedQuestions(demo.type === "chat" ? portfolioQA : []);
    setActiveMachine(null);
    if (demo.fields) {
      const initForm = {};
      demo.fields.forEach((f) => (initForm[f] = ""));
      setForm(initForm);
    }
  };

  const closeModal = () => setActiveDemo(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const createQR = async () => {
    const text = Object.entries(form).map(([key, val]) => `${key}: ${val}`).join("\n");
    try {
      const qrDataUrl = await QRCode.toDataURL(text, { margin: 2, width: 300 });
      setQr(qrDataUrl);
    } catch (err) { console.error("Error generating QR", err); }
  };

  const addTask = () => { if (!taskInput.trim()) return; setTasks([...tasks, { text: taskInput, done: false }]); setTaskInput(""); };
  const toggleTask = (index) => { const newTasks = [...tasks]; newTasks[index].done = !newTasks[index].done; setTasks(newTasks); };
  const deleteTask = (index) => { const newTasks = [...tasks]; newTasks.splice(index, 1); setTasks(newTasks); };

  const getPortfolioReply = (message) => {
    const msg = message.toLowerCase().trim();
    for (let qa of portfolioQA) if (msg === qa.question.toLowerCase()) return qa.answer;
    for (let qa of portfolioQA) if (msg.includes(qa.question.toLowerCase().split(" ")[0])) return qa.answer;
    const fallbackReplies = [
      "That's an interesting question! I specialize in full-stack development for enterprise systems.",
      "I can answer that! I have extensive experience in developing, maintaining, and optimizing web applications.",
      "I usually focus on backend APIs, frontend integration, and database management, along with workflow automation.",
      "Could you please specify which project or technology you want me to explain?"
    ];
    return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
  };

  const sendMessage = (msgText = null) => {
    const trimmed = (msgText ?? input).trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { sender: "user", text: trimmed }]);
    setInput(""); setSuggestedQuestions([]);
    const botReply = getPortfolioReply(trimmed);
    setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
  };

  const startMachineProducts = (machineName, idx) => {
    const initialProducts = Array.from({length:5}, (_, i)=>({name:`${machineName} Product ${i+1}`, done:false}));
    setProducts(initialProducts); setProductIndex(0); setActiveMachine({name:machineName, idx});
  };

  return (
    <section id="feature-demos" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h3 className="text-4xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Feature Mini Demos
          </span>
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {demoTemplates.map((d) => (
            <button
              key={d.id}
              onClick={() => openDemo(d)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {d.title}
            </button>
          ))}
        </div>

        {activeDemo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-3xl shadow-2xl relative border border-gray-700 overflow-y-auto max-h-[90vh]">
              <h3 className="text-2xl font-bold mb-6 text-indigo-300">{activeDemo.title}</h3>

              {/* ===== QR Demo ===== */}
              {activeDemo.type === "qr" && (
                <>
                  {activeDemo.fields.map((f) => (
                    <input
                      key={f}
                      name={f}
                      placeholder={f}
                      value={form[f]}
                      onChange={handleChange}
                      className="w-full p-3 mb-4 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ))}
                  <button
                    onClick={createQR}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg text-white font-semibold shadow-lg transition transform hover:scale-105"
                  >
                    Generate QR
                  </button>
                  {qr && (
                    <div className="text-center mt-5">
                      <img src={qr} alt="QR Code" className="mx-auto max-w-full border-2 border-gray-600 rounded-lg shadow-md" />
                      <p className="mt-3 text-gray-300 text-sm">Scan this QR with your phone</p>
                      <a href={qr} download={`qr_demo_${activeDemo.id}.png`} className="inline-block mt-2 text-indigo-400 underline hover:text-indigo-200 text-sm">Download QR</a>
                    </div>
                  )}
                </>
              )}

              {/* ===== Chat Demo ===== */}
              {activeDemo.type === "chat" && (
                <div className="flex flex-col h-96">
                  <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-800 rounded-xl mb-2 shadow-inner scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-700">
                    {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`px-4 py-2 rounded-2xl max-w-[70%] break-words ${m.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"} shadow-md`}>
                          {m.text}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef}></div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => {
                        const val = e.target.value;
                        setInput(val);
                        setSuggestedQuestions(val.trim() === "" ? portfolioQA : portfolioQA.filter(qa => qa.question.toLowerCase().includes(val.toLowerCase())));
                      }}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Ask me about my portfolio..."
                      className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {suggestedQuestions.length > 0 && (
                      <div className="absolute z-10 bg-gray-700 mt-1 w-full rounded-lg shadow-lg max-h-40 overflow-y-auto">
                        {suggestedQuestions.map((qa, idx) => (
                          <div key={idx} onClick={() => sendMessage(qa.question)} className="px-4 py-2 hover:bg-gray-600 cursor-pointer text-white">{qa.question}</div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={() => sendMessage()} className="mt-2 w-full px-6 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold shadow transform hover:scale-105 transition">Send</button>
                </div>
              )}

              {/* ===== Todo Demo ===== */}
              {activeDemo.type === "todo" && (
                <>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Enter task"
                      value={taskInput}
                      onChange={(e) => setTaskInput(e.target.value)}
                      className="flex-1 p-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button onClick={addTask} className="px-6 bg-green-500 hover:bg-green-600 rounded-xl text-white font-semibold shadow transform hover:scale-105 transition">Add</button>
                  </div>
                  <ul className="max-h-64 overflow-y-auto space-y-2">
                    {tasks.map((t, i) => (
                      <li key={i} className="flex justify-between items-center p-3 bg-gray-800 rounded-xl shadow hover:bg-gray-700 transition">
                        <div className="flex items-center">
                          <input type="checkbox" checked={t.done} onChange={() => toggleTask(i)} className="mr-3 w-5 h-5 accent-indigo-500"/>
                          <span className={t.done ? "line-through text-gray-400" : "text-white"}>{t.text}</span>
                        </div>
                        <button onClick={() => deleteTask(i)} className="text-red-500 hover:text-red-400 font-bold text-xl">×</button>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* ===== Production Demo ===== */}
              {activeDemo.type === "production" && (
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activeDemo.machines.map((machine, idx) => {
                      const status = activeDemo.status[idx];
                      const colors = { Running: "bg-green-500", Idle: "bg-yellow-500", Error: "bg-red-500" };
                      return (
                        <div key={idx} className="p-5 rounded-2xl bg-gray-900 flex flex-col items-center shadow-lg hover:shadow-xl transition">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colors[status]} text-black font-bold mb-3`}>{status[0]}</div>
                          <span className="text-xl font-semibold text-white mb-1">{machine}</span>
                          <span className="text-gray-400 text-sm mb-3">{status}</span>
                          <div className="flex space-x-3">
                            <button className="px-3 py-1 bg-indigo-500 rounded-lg text-white font-medium hover:bg-indigo-600 transition transform hover:scale-105"
                              onClick={() => {
                                const newStatus = [...activeDemo.status];
                                newStatus[idx] = status === "Idle" ? "Running" : status === "Running" ? "Error" : "Idle";
                                setActiveDemo({ ...activeDemo, status: newStatus });
                              }}>Toggle Status</button>
                            <button className="px-3 py-1 bg-purple-500 rounded-lg text-white font-medium hover:bg-purple-600 transition transform hover:scale-105"
                              onClick={() => startMachineProducts(machine, idx)}>View Products</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {activeMachine && (
                    <div className="mt-6 p-5 bg-gray-900 rounded-2xl shadow-lg overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-700">
                      <h4 className="text-white font-bold text-lg mb-3">{activeMachine.name} Conveyor</h4>
                      <div className="flex space-x-4 p-3">
                        {products.map((p, i) => (
                          <div key={i} className={`flex-none w-28 h-28 flex items-center justify-center rounded-xl text-white font-semibold text-center
                            ${p.done ? 'bg-green-600 shadow-lg' : 'bg-blue-500 shadow-md'}
                            transition-transform transform hover:scale-105`}>
                            {p.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold">×</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
