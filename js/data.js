/* APEX Learning Agent demo data and shared browser helpers.
   This is a front-end prototype; localStorage is not a secure production database. */
(function () {
  const KEYS = {
    students: 'apex_students', teachers: 'apex_teachers', attendance: 'apex_attendance',
    marks: 'apex_marks', fees: 'apex_fees', announcements: 'apex_announcements',
    videos: 'apex_videos', classes: 'apex_teacher_classes', session: 'apex_session'
  };
  const seed = {
    students: [
      {id:'student1',name:'Muthazhagan E',email:'mutha@ait.edu',password:'student123',rollNo:'241701035',dept:'CSD',sem:5,photo:'👨‍🎓',section:'CSD-A',phone:'9876543210'},
      {id:'student2',name:'Chandru S',email:'chandru@ait.edu',password:'student123',rollNo:'241701012',dept:'CSD',sem:5,photo:'👨‍🎓',section:'CSD-A',phone:'9876543211'},
      {id:'student3',name:'Naveen Kumar S',email:'naveen@ait.edu',password:'student123',rollNo:'241701037',dept:'CSD',sem:5,photo:'👨‍🎓',section:'CSD-A',phone:'9876543212'},
      {id:'student4',name:'Priya R',email:'priya@ait.edu',password:'student123',rollNo:'241701041',dept:'CSD',sem:5,photo:'👩‍🎓',section:'CSD-A',phone:'9876543213'}
    ],
    teachers: [
      {id:'teacher1',name:'Gopi K',email:'gopi@ait.edu',password:'teacher123',dept:'Computer Science and Design',subject:'Web Programming',photo:'👨‍🏫'},
      {id:'teacher2',name:'Anitha R',email:'anitha@ait.edu',password:'teacher123',dept:'Computer Science and Design',subject:'Database Management Systems',photo:'👩‍🏫'}
    ],
    attendance: {
      student1:{present:42,totalSessions:48,absent:6,subjects:[{name:'Web Programming',attended:10,scheduled:12,percentage:83.3},{name:'Database Management',attended:9,scheduled:12,percentage:75},{name:'Computer Graphics',attended:8,scheduled:12,percentage:66.7},{name:'Design Thinking',attended:11,scheduled:12,percentage:91.7}]},
      student2:{present:40,totalSessions:48,absent:8,subjects:[{name:'Web Programming',attended:10,scheduled:12,percentage:83.3},{name:'Database Management',attended:10,scheduled:12,percentage:83.3},{name:'Computer Graphics',attended:7,scheduled:12,percentage:58.3},{name:'Design Thinking',attended:10,scheduled:12,percentage:83.3}]},
      student3:{present:44,totalSessions:48,absent:4,subjects:[{name:'Web Programming',attended:11,scheduled:12,percentage:91.7},{name:'Database Management',attended:11,scheduled:12,percentage:91.7},{name:'Computer Graphics',attended:10,scheduled:12,percentage:83.3},{name:'Design Thinking',attended:12,scheduled:12,percentage:100}]},
      student4:{present:39,totalSessions:48,absent:9,subjects:[{name:'Web Programming',attended:9,scheduled:12,percentage:75},{name:'Database Management',attended:10,scheduled:12,percentage:83.3},{name:'Computer Graphics',attended:8,scheduled:12,percentage:66.7},{name:'Design Thinking',attended:9,scheduled:12,percentage:75}]}
    },
    marks: {
      student1:[{subject:'Web Programming',internal1:18,internal2:19,internal3:18,assignment:9,semester:5,grade:'A+',status:'Pass'},{subject:'Database Management',internal1:17,internal2:18,internal3:19,assignment:10,semester:5,grade:'A',status:'Pass'},{subject:'Computer Graphics',internal1:16,internal2:17,internal3:18,assignment:9,semester:5,grade:'A',status:'Pass'},{subject:'Design Thinking',internal1:19,internal2:19,internal3:20,assignment:10,semester:5,grade:'O',status:'Pass'}],
      student2:[{subject:'Web Programming',internal1:16,internal2:17,internal3:18,assignment:9,semester:5,grade:'A',status:'Pass'},{subject:'Database Management',internal1:18,internal2:18,internal3:17,assignment:9,semester:5,grade:'A',status:'Pass'}],
      student3:[{subject:'Web Programming',internal1:19,internal2:20,internal3:19,assignment:10,semester:5,grade:'O',status:'Pass'},{subject:'Database Management',internal1:18,internal2:19,internal3:19,assignment:10,semester:5,grade:'A+',status:'Pass'}],
      student4:[{subject:'Web Programming',internal1:17,internal2:18,internal3:17,assignment:9,semester:5,grade:'A',status:'Pass'}]
    },
    fees: {
      student1:{totalFee:85000,paid:65000,pending:20000,breakdown:[{type:'Tuition Fee',amount:50000,paid:true,date:'2026-06-12',receipt:'AIT-260612'},{type:'Laboratory Fee',amount:15000,paid:true,date:'2026-06-12',receipt:'AIT-260613'},{type:'Semester Fee',amount:20000,paid:false,date:'—',receipt:''}]},
      student2:{totalFee:85000,paid:70000,pending:15000,breakdown:[{type:'Tuition Fee',amount:50000,paid:true,date:'2026-06-12',receipt:'AIT-260614'},{type:'Laboratory Fee',amount:20000,paid:true,date:'2026-06-12',receipt:'AIT-260615'},{type:'Semester Fee',amount:15000,paid:false,date:'—',receipt:''}]},
      student3:{totalFee:85000,paid:85000,pending:0,breakdown:[{type:'Tuition Fee',amount:50000,paid:true,date:'2026-06-12',receipt:'AIT-260616'},{type:'Laboratory Fee',amount:15000,paid:true,date:'2026-06-12',receipt:'AIT-260617'},{type:'Semester Fee',amount:20000,paid:true,date:'2026-06-12',receipt:'AIT-260618'}]},
      student4:{totalFee:85000,paid:60000,pending:25000,breakdown:[{type:'Tuition Fee',amount:50000,paid:true,date:'2026-06-12',receipt:'AIT-260619'},{type:'Laboratory Fee',amount:10000,paid:true,date:'2026-06-12',receipt:'AIT-260620'},{type:'Semester Fee',amount:25000,paid:false,date:'—',receipt:''}]}
    },
    announcements: [
      {id:'ann1',author:'Academic Office',avatar:'🏫',time:'Today · 9:30 AM',category:'Academic',title:'Internal Assessment Schedule',content:'The upcoming internal assessment schedule is available. Please check your department notice board for subject-wise details.',likes:18,comments:4},
      {id:'ann2',author:'Placement Cell',avatar:'💼',time:'Yesterday · 2:15 PM',category:'Placement',title:'Placement Training Registration',content:'Registration is open for the next placement preparation workshop. Contact your faculty coordinator for details.',likes:24,comments:6},
      {id:'ann3',author:'Student Affairs',avatar:'📢',time:'2 days ago',category:'Campus',title:'Campus Activity Update',content:'Keep checking this portal for upcoming events, important deadlines and campus announcements.',likes:12,comments:2},
      {id:'ann4',author:'Finance Office',avatar:'💳',time:'3 days ago',category:'Fees',title:'Semester Fee Reminder',content:'Please review your fee status and contact the finance office if you need assistance.',likes:8,comments:1}
    ],
    videos: [
      {id:'vid1',title:'Introduction to Web Programming',subject:'Web Programming',description:'HTML, CSS and JavaScript fundamentals',url:'',teacherId:'teacher1',likes:12,dislikes:0,views:34,viewers:[]},
      {id:'vid2',title:'Database Design Basics',subject:'Database Management',description:'Relational models and SQL essentials',url:'',teacherId:'teacher2',likes:9,dislikes:0,views:21,viewers:[]},
      {id:'vid3',title:'Computer Graphics Overview',subject:'Computer Graphics',description:'Core concepts and graphics algorithms',url:'',teacherId:'teacher1',likes:7,dislikes:1,views:16,viewers:[]}
    ],
    classes: {
      teacher1:[{id:'class1',name:'CSD - Section A',subject:'Web Programming',students:['student1','student2','student3','student4']}],
      teacher2:[{id:'class2',name:'CSD - Section A',subject:'Database Management',students:['student1','student2','student3','student4']}]
    }
  };
  function read(key) {
    try { const raw=localStorage.getItem(KEYS[key] || key); return raw ? JSON.parse(raw) : null; } catch(e) { return null; }
  }
  function write(key,value) { localStorage.setItem(KEYS[key] || key, JSON.stringify(value)); return value; }
  window.initData = function () {
    Object.keys(seed).forEach(k => { if (localStorage.getItem(KEYS[k]) === null) write(k, seed[k]); });
  };
  window.saveData = function (key,value) { return write(key,value); };
  window.getStudents = function () { return read('students') || []; };
  window.getTeachers = function () { return read('teachers') || []; };
  window.getAttendance = function () { return read('attendance') || {}; };
  window.getMarks = function () { return read('marks') || {}; };
  window.getFees = function () { return read('fees') || {}; };
  window.getAnnouncements = function () { return read('announcements') || []; };
  window.getVideos = function () { return read('videos') || []; };
  window.saveVideos = function (videos) { return write('videos',videos); };
  window.getTeacherClasses = function () { return read('classes') || {}; };
  window.authenticate = function (email,password,role) {
    window.initData();
    const source = role === 'student' ? window.getStudents() : role === 'teacher' ? window.getTeachers() : [{id:'admin1',name:'Administrator',email:'admin@ait.edu',password:'admin123',dept:'Administration',photo:'⚙️'}];
    const user = source.find(u => (u.email||'').toLowerCase() === String(email).trim().toLowerCase() && u.password === password);
    if (!user) return null;
    const clean = Object.assign({},user); delete clean.password; return clean;
  };
  window.setSession = function (user,role) { localStorage.setItem(KEYS.session,JSON.stringify({user,role,createdAt:Date.now()})); };
  window.getSession = function () { try { return JSON.parse(localStorage.getItem(KEYS.session)||'null'); } catch(e) { return null; } };
  window.clearSession = function () { localStorage.removeItem(KEYS.session); };
  window.logout = function () { window.clearSession(); window.location.href = 'index.html'; };
  window.hasWatched = function (videoId,studentId) {
    const v=window.getVideos().find(x=>x.id===videoId); return !!(v && (v.viewers||[]).some(x=>x.studentId===studentId && x.viewCount>0));
  };
  window.hasLiked = function (videoId,studentId) {
    const v=window.getVideos().find(x=>x.id===videoId); return !!(v && (v.viewers||[]).some(x=>x.studentId===studentId && x.liked));
  };
  window.recordVideoView = function (videoId,studentId) {
    const vids=window.getVideos(), v=vids.find(x=>x.id===videoId); if(!v)return;
    v.views=(v.views||0)+1; v.viewers=v.viewers||[];
    let viewer=v.viewers.find(x=>x.studentId===studentId);
    if(!viewer){viewer={studentId,viewCount:0,watchedPct:0,lastWatched:null,liked:false};v.viewers.push(viewer);}
    viewer.viewCount++; viewer.lastWatched=new Date().toISOString(); window.saveVideos(vids);
  };
  window.initData();
})();