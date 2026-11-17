const P = [
  {
    id: "badminton", title: "Auto Badminton Training Robot", categories: ["robotics", "mechanical", "simulation"],
    description: "Design and development of a badminton training robot for automated shuttlecock launching, integrating a mechanical feeding system, launch control, and adjustable trajectory mechanisms.",
    tags: ["SolidWorks", "MATLAB", "Motion Simulation"], image: "assets/project-media/basta_1.png",
    contribution: ["Mechanical Component and Frame Design", "3D CAD Modelling and Assembly", "Slider-Crank Mechanism Design using MATLAB", "Launch Angle and Trajectory Calculations", "Kinematic Analysis using SolidWorks Motion Simulation"],
    features: ["Integrated Mechanical Assembly", "Automated Shuttlecock Feeding and Launching", "Adjustable Vertical and Horizontal Aiming Mechanisms", "Motion Simulation and Mechanism Validation"],
    tools: "SolidWorks · MATLAB · Motion Simulation",
    media: [{type:"video",src:"assets/project-media/basta_v1.mp4",label:"Shuttlecock launcher video"}, ...[1,2,3,4].map(n=>({type:"image",src:`assets/project-media/basta_${n}.png`,label:`Shuttlecock launcher image ${n}`}))]
  },
  {
    id: "engine", title: "4-Cylinder Internal Combustion (IC) Engine – CAD Modelling", categories: ["mechanical"],
    description: "Detailed 3D CAD modelling and assembly of a four-cylinder internal combustion engine, focusing on component-level design, internal mechanisms, and overall engine architecture using SolidWorks.",
    tags: ["SolidWorks", "3D CAD Modelling", "Assembly Design"], image: "assets/project-media/ic_engine0.png",
    contribution: ["3D Modelling of Engine Components", "Engine Block and Cylinder Head Design", "Piston, Connecting Rod and Crankshaft Modelling", "Flywheel, Pulley and Belt Assembly", "Complete Engine Assembly and Component Integration"],
    features: ["Detailed Four-Cylinder Engine Assembly", "Internal Component Visualization using Section and Transparent Views", "Accurate Component Placement and Assembly", "Detailed Internal and External Engine Architecture"],
    tools: "SolidWorks · 3D CAD Modelling · Assembly Design",
    media: [{type:"video",src:"assets/project-media/ic_enginev.mp4",label:"Four-cylinder IC engine video"}, ...["ic_engine0.png","ic_engine1.png","ic_engine2.png","ic_engine3.png","ic_engine4.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`IC engine image ${i}`}))]
  },
  {
    id: "helical", title: "Speed Reduction Gearbox – Compound Gear Train Design and CAD Modelling", categories: ["mechanical", "simulation"],
    description: "Designed a speed reduction gearbox incorporating a compound gear train with helical gears to achieve the required speed reduction and torque transmission. Developed the gearbox assembly in SolidWorks, including gear arrangements, stepped shafts, bearing supports and housing. Performed shaft design calculations by determining critical shaft diameters under combined loading conditions and selected suitable bearings for reliable operation.",
    tags: ["SolidWorks", "Mechanical Design", "Machine Design"], image: "assets/project-media/helical0.png",
    contribution: ["3D CAD Modelling of Helical Gears, Shafts and Gearbox Housing", "Design and Arrangement of Compound Gear Train", "Gear Ratio and Speed Reduction Calculations", "Shaft Design Based on Critical Diameter Calculations", "Bearing Selection Based on Shaft Dimensions and Loading Conditions", "Complete Gearbox Assembly in SolidWorks"],
    features: ["Compound Gear Train Configuration", "Helical Gear-Based Power Transmission", "Multi-Shaft Gearbox Arrangement", "Shaft Design Under Combined Loading", "Bearing Selection and Integration", "Complete 3D CAD Assembly"],
    tools: "SolidWorks · Mechanical Design · Machine Design",
    media: [{type:"video",src:"assets/project-media/helical_explode.mp4",label:"Helical gearbox exploded assembly video"},{type:"video",src:"assets/project-media/motor_helical.mp4",label:"Helical gearbox motor animation"}, ...["helical0.png","helical1.png","helical2.png","helical3.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`Helical gearbox image ${i}`}))]
  },
  {
    id: "quadcopter", title: "Quadcopter Modelling and Simulation – MATLAB/Simulink (Ongoing)", categories: ["robotics", "simulation"],
    description: "Developed a physics-based quadcopter simulation model using MATLAB Simulink and Simscape, integrating the airframe, four propeller assemblies, motor-drive systems, and PID-based control for modelling and analysing quadcopter dynamics.",
    tags: ["MATLAB", "Simulink", "Simscape Multibody", "PID Controller"], image: "assets/project-media/quad0.png",
    contribution: ["Quadcopter Airframe Modelling using Simscape Multibody", "Coordinate System and Ground Reference Configuration", "Four-Propeller Assembly and Motor-Drive Modelling", "PID Controller Design and Integration", "Simulink Subsystem Development and System Integration", "Multibody System Modelling and Simulation"],
    features: ["Four-Propeller Quadcopter Configuration", "Physics-Based Multibody System Model", "Integrated Motor and Propeller Subsystems", "PID-Based Closed-Loop Control", "Modular Simulink Model Architecture", "Dynamic System Simulation"],
    tools: "MATLAB · Simulink · Simscape Multibody · PID Controller",
    media: [{type:"video",src:"assets/project-media/quadv.mp4",label:"Quadcopter simulation video"}, ...["quad0.png","quad1.png","quad2.png","quad3.png","quad4.png","quad5.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`Quadcopter image ${i}`}))]
  },
  {
    id: "scara-shaft", title: "Structural Design and FEA Optimization of SCARA-IAD Joint Shaft", categories: ["mechanical", "simulation", "robotics"],
    description: "Designed and optimized a stepped shaft for a SCARA-Type Intelligent Assist Device (IAD) joint under combined bending, torsional, and radial loading. Performed analytical design calculations and SolidWorks Simulation to evaluate structural strength and optimize the shaft by reducing material usage.",
    tags: ["SolidWorks", "SolidWorks Simulation", "Machine Design", "FEA"], image: "assets/project-media/shaft1.png",
    contribution: ["Stepped Shaft Design Based on Component and Bearing Bore Dimensions", "Analytical Shaft Design under Combined Loading", "Solid Shaft Modelling and Initial FEA", "Hollow Shaft Design for Weight and Material Optimization", "Static Structural Analysis using SolidWorks Simulation", "Evaluation of Von Mises Stress, Strain, Deformation, and Factor of Safety", "Analytical Validation using Theories of Failure", "Comparison of Analytical and FEA Results"],
    features: ["Stepped Shaft Design for SCARA-Type IAD Joint", "Combined Bending, Torsional, and Radial Load Analysis", "Solid and Hollow Shaft Design Comparison", "Multiple Wall Thickness Iterations for Optimization", "Analytical and FEA-Based Design Validation", "Material Reduction while Maintaining Structural Safety"],
    tools: "SolidWorks · SolidWorks Simulation · Machine Design · FEA",
    media: [
      {type:"video",src:"assets/project-media/shaftv.mp4",label:"SCARA-IAD joint shaft FEA video"},
      ...["shaft0.png","shaft1.png","shaft2.png","shaft3.png","shaft4.png","shaft5.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`SCARA-IAD shaft image ${i+1}`}))
    ]
  },
  {
    id: "puma-arm", title: "PUMA-Type Robotic Arm – CAD Design and Assembly", categories: ["robotics", "mechanical"],
    description: "Designed a PUMA-type robotic manipulator using SolidWorks, featuring a 4R (four revolute joint) configuration and an end-effector gripper. Developed individual mechanical links and integrated them into a complete assembly with provision for servo motor mounting and actuation.",
    tags: ["SolidWorks", "3D CAD Modelling", "Assembly Design"], image: "assets/project-media/robo0.png",
    contribution: ["3D CAD Modelling of Individual Robotic Links", "Mechanical Design of the Base, Shoulder, Elbow and Wrist Assemblies", "Design and Modelling of End-Effector Gripper", "Assembly of Components with Revolute Joint Connections", "Provision for Servo Motor Mounting and Actuation", "Complete Robotic Arm Assembly in SolidWorks"],
    features: ["4R (Four Revolute Joint) Robotic Configuration", "Modular Link-Based Mechanical Design", "Integrated End-Effector Gripper", "Servo Motor Mounting Provisions", "Revolute Joint-Based Assembly", "Complete 3D Robotic Manipulator Model"],
    tools: "SolidWorks · 3D CAD Modelling · Assembly Design",
    media: [
      {type:"video",src:"assets/project-media/robov.mp4",label:"PUMA-type robotic arm assembly video"},
      ...["robo0.png","robo2.png","robo3.png","robo4.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`PUMA-type robotic arm image ${i}`}))
    ]
  },
  {
    id: "beam-fea", title: "Structural Analysis of I-Section Beam – FEA Simulation", categories: ["mechanical", "simulation"],
    description: "Performed finite element analysis of an I-section beam under specified loading and boundary conditions using SolidWorks Simulation to evaluate its structural behaviour, stress distribution, deformation, and factor of safety.",
    tags: ["SolidWorks", "SolidWorks Simulation", "FEA"], image: "assets/project-media/beam0.png",
    contribution: ["3D CAD Modelling of I-Section Beam", "Material Selection and Property Assignment (AISI 304 Stainless Steel)", "Application of Loads and Boundary Conditions", "Mesh Generation and Static Structural Analysis", "Evaluation of Von Mises Stress and Equivalent Strain", "Deformation Analysis and Factor of Safety Calculation"],
    features: ["Static Structural Analysis under Applied Loading", "Von Mises Stress Distribution", "Equivalent Strain Analysis", "Total Deformation Evaluation", "Factor of Safety Assessment", "Stress Concentration Identification"],
    tools: "SolidWorks · SolidWorks Simulation · Finite Element Analysis (FEA)",
    media: [
      {type:"video",src:"assets/project-media/stress1.mp4",label:"I-section beam stress analysis video"},
      {type:"video",src:"assets/project-media/deformation.mp4",label:"I-section beam deformation analysis video"},
      ...["beam0.png","beam1.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`I-section beam analysis image ${i+1}`}))
    ]
  }
  ,
  {
    id: "gear-gripper", title: "Gear-Driven Two-Finger Robotic Gripper – Mechanical Design and CAD Modelling", categories: ["robotics", "mechanical"],
    description: "Designed a two-finger robotic gripper featuring a gear-driven actuation mechanism to achieve synchronized and symmetrical movement of both gripping fingers. Utilized a pair of spur gears to coordinate finger motion and incorporated an additional drive gear with provision for servo motor coupling. Developed individual mechanical components, including gripping fingers, connecting linkages, gear arrangements and mounting plates, and assembled the complete mechanism in SolidWorks.",
    tags: ["SolidWorks", "3D CAD Modelling", "Assembly Design", "Machine Design"], image: "assets/project-media/gripper0.png",
    contribution: ["3D CAD Modelling of Gripper Components and Mechanical Linkages", "Design and Arrangement of Spur Gear-Based Transmission", "Development of Synchronized Two-Finger Gripping Mechanism", "Design of Connecting Links and Finger Assemblies", "Integration of a Third Gear for Servo Motor Actuation", "Complete Assembly and Mechanical Joint Connections in SolidWorks"],
    features: ["Gear-Driven Two-Finger Gripping Mechanism", "Synchronized and Symmetrical Finger Movement", "Spur Gear-Based Power Transmission", "Linkage-Based Finger Actuation", "Provision for Servo Motor Integration", "Complete 3D CAD Assembly"],
    tools: "SolidWorks · 3D CAD Modelling · Assembly Design · Machine Design",
    media: [
      {type:"video",src:"assets/project-media/gripperv.mp4",label:"Gear-driven two-finger gripper video"},
      ...["gripper0.png","gripper1.png","gripper2.png","gripper3.png","gripper4.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`Robotic gripper image ${i}`}))
    ]
  },
  {
    id: "planetary", title: "Planetary Gear Train – Mechanical Design and CAD Modelling", categories: ["mechanical"],
    description: "Designed and assembled a planetary gear train in SolidWorks, incorporating a central sun gear, three planet gears, and an internal ring gear to create a compact and coaxial power transmission mechanism. Imported the standard gear components from the SolidWorks Toolbox and designed the supporting components, planet carrier, shafts, and associated assembly parts. Integrated the components to establish proper gear meshing and demonstrate the planetary transmission arrangement.",
    tags: ["SolidWorks", "Part Design", "Assembly", "Toolbox"], image: "assets/project-media/planetary0.png",
    contribution: ["Imported the sun gear, planet gears, and internal ring gear using SolidWorks Toolbox.", "Designed the planet carrier, supporting shafts, and other custom mechanical components.", "Performed complete assembly in SolidWorks, ensuring proper positioning and alignment of the gear components.", "Configured the three planet gears to mesh with both the central sun gear and internal ring gear.", "Developed a compact assembly demonstrating the configuration and working principle of a planetary gear mechanism."],
    features: ["Sun, planet, and internal ring gear configuration.", "Three equally spaced planet gears for balanced gear arrangement.", "Custom-designed planet carrier and supporting components.", "Compact, coaxial gear transmission architecture.", "Detailed 3D part modelling and mechanical assembly."],
    tools: "SolidWorks (Part Design, Assembly, Toolbox)",
    media: [
      {type:"video",src:"assets/project-media/planetaryv.mp4",label:"Planetary gear train assembly video"},
      ...["planetary0.png","planetary1.png","planetary2.png","planetary3.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`Planetary gear train image ${i}`}))
    ]
  }

  ,
  {
    id: "screw-jack", title: "Screw Jack – Mechanical Design and CAD Modelling", categories: ["mechanical"],
    description: "Designed a mechanical screw jack for lifting heavy loads using a power screw mechanism. Performed design calculations to determine the appropriate screw and nut diameters based on the applied load and selected a square thread profile for efficient power transmission. Calculated the handle length based on the required operating torque and incorporated a thrust bearing to reduce friction during screw rotation. Designed the individual components and assembled the complete mechanism in SolidWorks to develop a functional screw jack model.",
    tags: ["SolidWorks", "Part Design", "Assembly", "Engineering Design Calculations"], image: "assets/project-media/screw0.png",
    contribution: ["Performed design calculations to determine the screw and nut dimensions based on the lifting load.", "Selected a square thread profile considering its suitability for power transmission.", "Calculated the required handle length based on the operating torque.", "Selected and incorporated a thrust bearing to reduce friction and facilitate smooth rotation.", "Designed the individual mechanical components and developed the complete 3D assembly in SolidWorks."],
    features: ["Square-thread power screw mechanism.", "Load-based screw and nut dimensioning.", "Lever-operated lifting mechanism.", "Thrust bearing arrangement for reduced friction.", "Complete 3D CAD modelling and mechanical assembly."],
    tools: "SolidWorks (Part Design, Assembly) · Engineering Design Calculations",
    media: [
      {type:"video",src:"assets/project-media/screwv.mp4",label:"Screw jack assembly video"},
      ...["screw0.png","screw1.png","screw2.png"].map((f,i)=>({type:"image",src:`assets/project-media/${f}`,label:`Screw jack image ${i+1}`}))
    ]
  }

];
const tag = xs => xs.map(x=>`<span>${x}</span>`).join("");
const projectImage = p => p.image;
function grid(filter="all", query="") {
  const root=document.getElementById("grid"); if(!root)return;
  const q=query.toLowerCase();
  const items=P.filter(p=>(filter==="all"||p.categories.includes(filter))&&(p.title+" "+p.description+" "+p.tags.join(" ")).toLowerCase().includes(q));
  root.innerHTML=items.map(p=>`<article class="project-card"><a href="project.html?id=${p.id}" aria-label="View ${p.title}"><img src="${projectImage(p)}" alt="${p.title} thumbnail" onerror="this.src='assets/project-media/quad-placeholder.svg'"></a><div><small>PROJECT ${String(P.indexOf(p)+1).padStart(2,"0")}</small><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${tag(p.tags.slice(0,4))}</div><a href="project.html?id=${p.id}">View Project →</a></div></article>`).join("") || "<p>No projects match your search.</p>";
}
let filter="all"; grid();
document.querySelectorAll("#filters button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");filter=b.dataset.f;grid(filter,document.getElementById("search")?.value||"")}));
document.getElementById("search")?.addEventListener("input",e=>grid(filter,e.target.value));
let fi=0; const featured=P;
function feat(){const p=featured[fi],d=document.getElementById("fd");if(!d)return;document.getElementById("ft").textContent=p.title;d.textContent=p.description;document.getElementById("tags").innerHTML=tag(p.tags);const img=document.getElementById("fi");img.src=projectImage(p);img.alt=`${p.title} thumbnail`;img.onerror=()=>{img.src="assets/project-media/quad-placeholder.svg"};document.getElementById("fc").textContent=`${String(fi+1).padStart(2,"0")} / ${String(featured.length).padStart(2,"0")}`;document.getElementById("fn").textContent=`PROJECT ${String(fi+1).padStart(2,"0")}`;document.getElementById("fl").href=`project.html?id=${p.id}`}
feat();
if(document.getElementById("next")){document.getElementById("next").onclick=()=>{fi=(fi+1)%featured.length;feat()};document.getElementById("prev").onclick=()=>{fi=(fi+featured.length-1)%featured.length;feat()};setInterval(()=>{fi=(fi+1)%featured.length;feat()},5000)}
const id=new URLSearchParams(location.search).get("id"),p=P.find(x=>x.id===id)||P[0];
if(document.getElementById("dt")){
 document.getElementById("dn").textContent=`PROJECT ${String(P.indexOf(p)+1).padStart(2,"0")}`;
 document.getElementById("dt").textContent=p.title;document.getElementById("dd").textContent=p.description;document.getElementById("dtag").innerHTML=tag(p.tags);
 document.getElementById("dc").innerHTML=p.contribution.map(x=>`<li>${x}</li>`).join("");
 document.getElementById("df").innerHTML=p.features.map(x=>`<li>${x}</li>`).join("");
 const tools=document.getElementById("dtools");if(tools)tools.textContent=p.tools;
 const viewer=document.querySelector(".viewer");let mi=0;
 viewer.innerHTML=`<button type="button" id="mp" aria-label="Previous media">←</button><div class="media-stage" id="mediaStage"></div><button type="button" id="mn" aria-label="Next media">→</button><div id="thumbs" aria-label="Project media thumbnails"></div><div class="media-counter" id="mediaCounter"></div>`;
 function showMedia(){const item=p.media[mi],stage=document.getElementById("mediaStage");if(item.type==="video"){stage.innerHTML=`<video src="${item.src}" autoplay muted loop playsinline controls aria-label="${item.label}"></video>`;const v=stage.querySelector("video");v.addEventListener("error",()=>{stage.innerHTML=`<div class="media-missing">Video file not found: <b>${item.src.split("/").pop()}</b><br>Place this file in <code>assets/project-media/</code>.</div>`})}else{stage.innerHTML=`<img src="${item.src}" alt="${item.label}">`;stage.querySelector("img").addEventListener("error",e=>{e.currentTarget.replaceWith(Object.assign(document.createElement("div"),{className:"media-missing",innerHTML:`Image file not found: <b>${item.src.split("/").pop()}</b><br>Place this file in <code>assets/project-media/</code>.`}))})}document.getElementById("mediaCounter").textContent=`${mi+1} / ${p.media.length}`;document.querySelectorAll("#thumbs button").forEach((b,i)=>{b.classList.toggle("selected",i===mi);b.setAttribute("aria-current",i===mi?"true":"false")})}
 document.getElementById("thumbs").innerHTML=p.media.map((m,i)=>`<button type="button" class="media-thumb" data-index="${i}" aria-label="Show ${m.label}">${m.type==="video"?`<span class="video-thumb">▶ VIDEO</span>`:`<img src="${m.src}" alt="" onerror="this.style.display='none'">`}</button>`).join("");
 document.getElementById("mp").onclick=()=>{mi=(mi+p.media.length-1)%p.media.length;showMedia()};document.getElementById("mn").onclick=()=>{mi=(mi+1)%p.media.length;showMedia()};document.getElementById("thumbs").addEventListener("click",e=>{const b=e.target.closest("button[data-index]");if(b){mi=Number(b.dataset.index);showMedia()}});showMedia();
 document.getElementById("suggest").innerHTML=P.filter(x=>x.id!==p.id).map(x=>`<article class="project-card"><a href="project.html?id=${x.id}"><img src="${projectImage(x)}" alt="${x.title}" onerror="this.src='assets/project-media/quad-placeholder.svg'"></a><div><h3>${x.title}</h3><p>${x.description}</p><a href="project.html?id=${x.id}">Explore Project →</a></div></article>`).join("");
}
document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector("header").classList.toggle("navopen"));
// GOOGLE FORMS CONTACT INTEGRATION
// Replace the four placeholder values below with the entry IDs from your
// Google Form's pre-filled link. See README.txt for the exact steps.
const GOOGLE_FORM_ID = "1FAIpQLSeV4B5fTh6LaBgJwQuAzePPjFblGsJ89vShZJUBZQ4f81_04g";
const GOOGLE_FORM_ENTRY_IDS = {
  name: "entry.1456850906",
  email: "entry.395661840",
  subject: "entry.439258193",
  message: "entry.1059529529"
};
const contactForm = document.getElementById("form");
contactForm?.addEventListener("submit", e => {
  e.preventDefault();
  const status = document.getElementById("status");
  const submit = contactForm.querySelector('button[type="submit"]');
  const idsReady = Object.values(GOOGLE_FORM_ENTRY_IDS).every(v => /^entry\.\d+$/.test(v));
  if (!idsReady) {
    status.textContent = "The Google Form field IDs still need to be configured. See README.txt, then try again.";
    status.style.color = "#ffb45c";
    return;
  }
  if (contactForm.dataset.sending === "true") return;
  contactForm.dataset.sending = "true";
  submit.disabled = true;
  submit.textContent = "Sending…";
  status.textContent = "Submitting your message to Google Forms…";
  status.style.color = "#9ecbff";

  const iframeName = "google-form-submit-frame";
  let frame = document.getElementById(iframeName);
  if (!frame) {
    frame = document.createElement("iframe");
    frame.name = iframeName;
    frame.id = iframeName;
    frame.hidden = true;
    frame.title = "Google Forms submission frame";
    document.body.appendChild(frame);
  }
  const payload = new FormData(contactForm);
  const postForm = document.createElement("form");
  postForm.method = "POST";
  postForm.action = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;
  postForm.target = iframeName;
  postForm.hidden = true;
  ["name", "email", "subject", "message"].forEach(key => {
    const field = document.createElement("input");
    field.type = "hidden";
    field.name = GOOGLE_FORM_ENTRY_IDS[key];
    field.value = payload.get(key) || "";
    postForm.appendChild(field);
  });
  document.body.appendChild(postForm);
  postForm.submit();
  postForm.remove();
  // Google Forms blocks cross-origin response inspection. This confirms the
  // browser sent the request, not that Google accepted or stored it.
  window.setTimeout(() => {
    status.textContent = "Your message was sent to Google Forms. Thank you for getting in touch!";
    status.style.color = "#55d6a3";
    contactForm.reset();
    contactForm.dataset.sending = "false";
    submit.disabled = false;
    submit.textContent = "Send Message →";
  }, 1400);
});
