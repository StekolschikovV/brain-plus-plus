"use strict";var lang={start:function(){},elements:function(){},events:function(){},_getLang:function(){return db.settingsTemp[0].lang},get:function(e,t){if("ru"==e){if("tasks"==t)return"Задачи";if("timer"==t)return"Таймер";if("plan"==t)return"Расписание";if("settings"==t)return"Настройки";if("add"==t)return"Добавить";if("add_input_placeholder"==t)return"введите имя задачи";if("task_name"==t)return"имя задачи";if("add_note"==t)return"добавьте описание";if("add_tag"==t)return"добавьте теги";if("m"==t)return"мин";if("start"==t)return"Старт";if("stop"==t)return"Стоп";if("inf_timer_start_now"==t)return"Таймер уже запущен";if("timer_stop"==t)return"Таймер остановлен";if("timer_start"==t)return"Таймер запущен";if("general"==t)return"Основные";if("сhoose_your_language"==t)return"Выберите ваш язык";if("sound_of_seconds"==t)return"Звук секунд";if("sound_of_the_end_works"==t)return"Звук окончания работы";if("sound_of_the_end_rest"==t)return"Звук окончания отдыха";if("work_time"==t)return"Время работы";if("work_rest"==t)return"Время отдыха";if("start_of_the_day"==t)return"Начало дня";if("end_of_the_day"==t)return"Окончание дня";if("need_enter_title"==t)return"Нужно ввести название задачи";if("first_start_h2"==t)return"Найди свой рабочий баланс.";if("first_start_h3"==t)return"С таким большим количеством отвлекающих факторов в жизни легко потерять свои истинные цели и задачи.\n\nBrain ++ помогает понять ваши цели и задачи, чтобы вы могли сосредоточиться и быть более продуктивным.";if("first_start_get_start"==t)return"Начать"}else{if("tasks"==t)return"Tasks";if("timer"==t)return"Timer";if("plan"==t)return"Plan";if("settings"==t)return"Settings";if("add"==t)return"Add";if("add_input_placeholder"==t)return"enter the name of the new task";if("task_name"==t)return"task name";if("add_note"==t)return"add note";if("add_tag"==t)return"add tag";if("m"==t)return"m";if("start"==t)return"Start";if("stop"==t)return"Stop";if("inf_timer_start_now"==t)return"Timer already started";if("timer_stop"==t)return"timer stop";if("timer_start"==t)return"timer start";if("general"==t)return"General";if("сhoose_your_language"==t)return"Choose your language";if("sound_of_seconds"==t)return"Sound of seconds";if("sound_of_the_end_works"==t)return"Sound of the end works";if("sound_of_the_end_rest"==t)return"Sound of the end rest";if("work_time"==t)return"Work time";if("work_rest"==t)return"Rest time";if("start_of_the_day"==t)return"Start of the day";if("end_of_the_day"==t)return"End of the day";if("need_enter_title"==t)return"Need enter title";if("first_start_h2"==t)return"Find your ideal work‑life balance.";if("first_start_h3"==t)return"With so many distractions and possibilities in your digital life, it's easy to get scattered.\n\nBrain++ helps you understand your daily habits so you can focus and be more productive.";if("first_start_get_start"==t)return"Get Started"}},reload:function(){nav.showMenu(),document.querySelector("#menu li:nth-child(4)").click(),settings.reload(),taskList.reload(),timer.reload()}};lang.start();var animation={start:function(){},in:function(e,t){e.style.opacity="0",document.body.style.overflow="hidden",setTimeout(function(){e.classList.add("animated"),e.classList.add("flipInX"),e.style.opacity="1"},t),setTimeout(function(){e.classList.remove("animated"),e.classList.remove("flipInX"),document.body.style.overflow="auto"},t+1e3)},out:function(e,t,n,a){document.body.style.overflow="hidden",setTimeout(function(){e.classList.remove("flipInX"),e.classList.remove("animated"),e.classList.add("animated"),e.classList.add("flipOutX")},t),null!=n&&setTimeout(function(){n.remove(),document.body.style.overflow="auto"},a)}};animation.start();var modal={el_container:null,start:function(){modal.create_container()},create_container:function(){modal.el_container=document.createElement("div"),modal.el_container.id="modal-container"},showFirstStart:function(){modal.el_container.innerHTML="";var e=document.createElement("h2");e.innerText=lang.get(navigator.language,"first_start_h2"),modal.el_container.appendChild(e);var t=document.createElement("h3");t.innerText=lang.get(navigator.language,"first_start_h3"),modal.el_container.appendChild(t);var n=document.createElement("button");n.innerText=lang.get(navigator.language,"first_start_get_start"),n.onclick=function(){modal.hide()},modal.el_container.appendChild(n),document.body.appendChild(modal.el_container),modal.el_container.style.opacity="0",animation.in(modal.el_container,0)},hide:function(){animation.out(modal.el_container,0)}};modal.start();var inf={el_container:null,start:function(){inf.create_container()},create_container:function(){inf.el_container=document.createElement("div"),inf.el_container.id="inf-container",document.body.appendChild(inf.el_container)},show:function(e){var t=document.createElement("div");t.classList.add("inf-el"),animation.in(t,0),t.innerText=e,inf.el_container.appendChild(t),animation.out(t,2e3,t,4e3),inf._show_sound()},_show_sound:function(){new Audio("sounds/hifi.mp3").play()}};inf.start();var storage=require("electron-json-storage-sync"),db={tasksTemp:[],tagTempUnique:[],tagSelectTemp:"",settingsTemp:[],valSettingsTimerBlockSoundSeconds:"",valSettingsTimerBlockSoundEndWork:"",valSettingsTimerBlockSoundEndRest:"",plansTemp:[],start:function(){db.getAllTasks(),db.getAllSettings(),db.getAllPlans(),db.defaultData(),db.getAllTegs()},defaultData:function(){void 0==db.tasksTemp&&(db.tasksTemp=[]),void 0==db.plansTemp&&(db.plansTemp=[]),void 0==db.settingsTemp&&(db.settingsTemp=[],db.settingsTemp[0]={name:"general",lang:"en"},db.settingsTemp[1]="",db.settingsTemp[2]={name:"timer",settingsTimerBlockSoundSeconds:!0,settingsTimerBlockSoundEndWork:!0,settingsTimerBlockSoundEndRest:!0,settingsTimerBlockWorkTime:25,settingsTimerBlockRestTime:5},db.settingsTemp[3]={name:"plan",settings_plan_start_day:8,settings_plan_end_day:18},db.setAllSettings(),modal.showFirstStart())},addTask:function(e){db.tasksTemp.unshift({title:e}),db.setAllTasks(),db.getAllTasks()},getAllTasks:function(){db.tasksTemp=storage.get("tasks").data},setAllTasks:function(){storage.set("tasks",db.tasksTemp,function(e){}),db.getAllTasks()},removeTask:function(e){db.tasksTemp.splice(e,1),db.setAllTasks()},completeTask:function(e){void 0==db.tasksTemp[e].complete||0==db.tasksTemp[e].complete?db.tasksTemp[e].complete=!0:db.tasksTemp[e].complete=!1,db.setAllTasks()},changeTitleTask:function(e,t){db.tasksTemp[e].title=t,db.setAllTasks()},changeNoteTask:function(e,t){db.tasksTemp[e].note=t,db.setAllTasks()},changeTagTask:function(e,t){var n=t.split(",").filter(Boolean);db.tasksTemp[e].tag=n.map(Function.prototype.call,String.prototype.trim),db.setAllTasks()},swapAfterDnD:function(e,t){var n=db.tasksTemp[e],a=db.tasksTemp[t];db.tasksTemp[e]=a,db.tasksTemp[t]=n,db.setAllTasks(),taskList.set()},getAllTegs:function(){db.tagTempUnique=[];for(var e=0;e<db.tasksTemp.length;e++)if(db.tasksTemp[e].tag)for(var t=0;t<db.tasksTemp[e].tag.length;t++){var n=db.tasksTemp[e].tag[t];-1==db.tagTempUnique.indexOf(n)&&db.tagTempUnique.push(n)}},getAllSettings:function(){db.settingsTemp=storage.get("settings").data},setAllSettings:function(){storage.set("settings",db.settingsTemp,function(e){console.log(e)})},getAllPlans:function(){db.plansTemp=storage.get("plans").data},setAllPlans:function(){storage.set("plans",db.plansTemp,function(e){console.log(e)})},dataToTemp:function(e,t){if(0==db.plansTemp.length){var n=db._createPlanObj(e,t);db.plansTemp.push(n),db.setAllPlans()}else if(null==db._searchPlanObj()){var a=db._createPlanObj(e,t);db.plansTemp.push(a),db.setAllPlans()}else db._searchPlanObj()[e]=t,db.setAllPlans()},_createPlanObj:function(e,t){var n={date:plan.selectedDate.toString()};return n[e]=t,n},_searchPlanObj:function(){for(var e=null,t=0;t<db.plansTemp.length;t++)db.plansTemp[t].date.toString()==plan.selectedDate.toString()&&(e=db.plansTemp[t]);return e}};db.start(),setTimeout(function(){},50),document.querySelector("#add-task-form").onsubmit=function(){event.preventDefault();var e=document.querySelector("#add-task-form-input").value;if(e.length>0){db.addTask(e),taskList.set();var t=document.querySelector("#task-list li");animation.in(t,0),document.querySelector("#add-task-form-input").value=""}else inf.show(lang.get(lang._getLang(),"need_enter_title"))};var nav={el_menu:null,els_li:null,start:function(){nav.elements(),nav.events(),nav.showMenu()},elements:function(){nav.el_menu=document.querySelector("#menu"),nav.els_li=document.querySelectorAll("#menu li")},events:function(){nav.els_li.forEach(function(e){e.addEventListener("click",function(){document.querySelector("#menu li.select").classList.remove("select"),e.classList.add("select");var t=e.getAttribute("data-id");document.querySelectorAll("#pages > .select").forEach(function(e){e.classList.remove("select")}),document.querySelector("#pages #"+t).classList.add("select")})})},showMenu:function(){nav.el_menu.innerHTML="";var e=document.createElement("li");e.setAttribute("data-id","task"),e.classList.add("select"),e.innerText=lang.get(lang._getLang(),"tasks"),nav.el_menu.appendChild(e),(e=document.createElement("li")).setAttribute("data-id","timer"),e.innerText=lang.get(lang._getLang(),"timer"),nav.el_menu.appendChild(e),(e=document.createElement("li")).setAttribute("data-id","plan"),e.innerText=lang.get(lang._getLang(),"plan"),nav.el_menu.appendChild(e),(e=document.createElement("li")).setAttribute("data-id","settings"),e.innerText=lang.get(lang._getLang(),"settings"),nav.el_menu.appendChild(e),nav.elements(),nav.events()}};nav.start();var plan={dateToday:0,selectedDate:0,elDate:null,elArrLeft:null,elArrRight:null,elsDayInputs:null,start:function(){plan.elements(),plan.getDateToday(),plan.showDate(),plan.showData(),plan.timeInDay(),plan.events()},elements:function(){plan.elDate=document.querySelector("#plan .date"),plan.elArrLeft=document.querySelector("#plan .arr-left"),plan.elArrRight=document.querySelector("#plan .arr-right"),plan.elsDayInputs=document.querySelectorAll("#plan .day input")},events:function(){plan.elArrLeft.addEventListener("click",function(){plan.selectedDate=new Date(new Date(plan.selectedDate).getTime()-864e5),plan.showDate(),plan.showData()}),plan.elArrRight.addEventListener("click",function(){plan.selectedDate=new Date(new Date(plan.selectedDate).getTime()+864e5),plan.showDate(),plan.showData()}),Array.from(plan.elsDayInputs).forEach(function(e){e.addEventListener("keyup",function(e){var t=e.target.dataset.id,n=e.target.value;console.log(n),db.dataToTemp(t,n)})})},getDateToday:function(){plan.dateToday=new Date,plan.dateToday.setHours(0,0,0,0),plan.selectedDate=plan.dateToday},showDate:function(){plan.elDate.innerText=plan.selectedDate.getDate()+"/"+(plan.selectedDate.getMonth()+1)+"/"+plan.selectedDate.getFullYear()},showData:function(){var e=db._searchPlanObj();try{for(var t=0;t<plan.elsDayInputs.length;t++)void 0!=e[t]?plan.elsDayInputs[t].value=e[t]:plan.elsDayInputs[t].value=""}catch(e){for(var n=0;n<plan.elsDayInputs.length;n++)plan.elsDayInputs[n].value=""}},timeInDay:function(){for(var e=0;e<24;e++)db.settingsTemp[3].settings_plan_start_day>e?plan.elsDayInputs[e].style.display="none":db.settingsTemp[3].settings_plan_end_day<e?plan.elsDayInputs[e].style.display="none":plan.elsDayInputs[e].style.display="block"}};plan.start();var taskList={dragInputVal1:0,dragInputVal2:0,dragSrcEl:"",dragThis:"",el_add_task_form:null,start:function(){taskList.elements(),taskList.create_el(),taskList.set(),taskList.tagsTrigger()},elements:function(){taskList.el_add_task_form=document.querySelector("#add-task-form")},reload:function(){taskList.set(),taskList.create_el()},create_el:function(){taskList.el_add_task_form.innerHTML="";var e=document.createElement("input");e.type="text",e.id="add-task-form-input",e.placeholder=lang.get(lang._getLang(),"add_input_placeholder"),taskList.el_add_task_form.appendChild(e),(e=document.createElement("input")).type="submit",e.value=lang.get(lang._getLang(),"add"),taskList.el_add_task_form.appendChild(e)},set:function(){var e=document.querySelector("#task-list");e.innerHTML="";for(var t=0;t<db.tasksTemp.length;t++)if(""==db.tagSelectTemp)taskList.setEl(t,e);else{var n=db.tasksTemp[t].tag,a=document.querySelector("#tags > ul > li.select").innerText,s=!1;void 0!=n&&-1!=n.indexOf(a)&&(s=!0),s&&taskList.setEl(t,e)}},setEl:function(e,t){var n=document.createElement("li");db.tasksTemp[e].complete&&(n.className="complete"),n.addEventListener("dragstart",taskList.DnDhandleDragStart,!1),n.addEventListener("dragenter",taskList.DnDhandleDragEnter,!1),n.addEventListener("dragover",taskList.DnDhandleDragOver,!1),n.addEventListener("dragleave",taskList.DnDhandleDragLeave,!1),n.addEventListener("drop",taskList.DnDhandleDrop,!0);var a=document.createElement("div");a.innerText="...",a.classList.add("dnd-block"),a.onmousedown=function(e){e.target.parentNode.setAttribute("draggable",!0)},a.onmouseout=function(e){e.target.parentNode.setAttribute("draggable",!1)},n.appendChild(a);var s=document.createElement("input");s.value=db.tasksTemp[e].title,s.setAttribute("data-id",e),s.setAttribute("draggable",!1),s.placeholder=lang.get(lang._getLang(),"task_name"),s.onkeyup=function(e){db.changeTitleTask(e.target.getAttribute("data-id"),e.target.value)};var i=document.createElement("button");i.className="btn-remove",i.setAttribute("data-id",e),i.onclick=function(e){animation.out(e.target.parentNode,0,null,null),setTimeout(function(){db.removeTask(e.target.getAttribute("data-id")),taskList.set(),taskList.tagsTrigger()},1e3)};var r=document.createElement("button");r.setAttribute("data-id",e),r.className="btn-complete",r.onclick=function(e){db.completeTask(e.target.getAttribute("data-id")),taskList.set()};var l=document.createElement("button");l.setAttribute("data-id",e),l.className="btn-additional",l.onclick=function(e){e.target.parentNode.classList.toggle("additional-show")};var o=document.createElement("div");o.className="additional";var d=document.createElement("div");d.className="additional-right";var m=document.createElement("textarea");m.className="additional-right-tag",m.placeholder=lang.get(lang._getLang(),"add_tag"),m.setAttribute("data-id",e),void 0!=db.tasksTemp[e].tag&&(m.value=db.tasksTemp[e].tag),m.onkeyup=function(e){db.changeTagTask(e.target.getAttribute("data-id"),e.target.value),taskList.tagsTrigger()},d.appendChild(m);var c=document.createElement("textarea");c.className="additional-right-note",c.setAttribute("data-id",e),void 0!=db.tasksTemp[e].note&&(c.value=db.tasksTemp[e].note),c.placeholder=lang.get(lang._getLang(),"add_note"),c.onkeyup=function(e){db.changeNoteTask(e.target.getAttribute("data-id"),e.target.value)},d.appendChild(c),o.appendChild(d),n.appendChild(s),n.appendChild(l),n.appendChild(i),n.appendChild(r),n.appendChild(o),t.appendChild(n)},DnDhandleDragStart:function(e){console.log(e),taskList.dragSrcEl=this,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",this.innerHTML)},DnDhandleDragOver:function(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1},DnDhandleDragEnter:function(e){this.classList.add("over")},DnDhandleDragLeave:function(e){this.classList.remove("over")},DnDhandleDrop:function(e){return e.stopPropagation&&e.stopPropagation(),taskList.dragSrcEl!=this&&(taskList.dragThis=this,taskList.dragSrcEl.innerHTML=this.innerHTML,this.innerHTML=e.dataTransfer.getData("text/html"),db.swapAfterDnD(taskList.dragThis.querySelector("input").getAttribute("data-id"),taskList.dragSrcEl.querySelector("input").getAttribute("data-id"))),!1},showTags:function(){var e=document.querySelector("#tags ul");e.innerHTML="";for(var t=0;t<db.tagTempUnique.length;t++)!function(t){var n=document.createElement("li");n.innerText=db.tagTempUnique[t],n.setAttribute("data-id",t),n.onclick=function(e){document.querySelectorAll("body #tags ul li").forEach(function(e){e.classList.remove("select")});var t=document.querySelectorAll("#task > ul .select");if(0!=t.length)for(var a=0;a<t.length;a++)t[a].classList.remove("select");var s=e.target.getAttribute("data-id");db.tagSelectTemp!=s?(db.tagSelectTemp=s,n.classList.add("select")):db.tagSelectTemp="",taskList.set()},e.appendChild(n)}(t)},tagsTrigger:function(){db.getAllTegs(),taskList.showTags()}};taskList.start();var timer={workTimeTempTime:0,workTimeTempStatus:"stop",restTimeTempTime:0,elWorkRightContainer:"",elWorkRunContainer:"",btnTimerStart:"",start:function(){timer.create(),timer.elements(),timer.events(),timer.setRestAndWorkDefTime()},create:function(){var e=document.querySelector("#timer-controls");e.innerHTML="";var t=document.createElement("button");t.id="timer-control-start",t.innerText=lang.get(lang._getLang(),"start"),e.appendChild(t),(t=document.createElement("button")).id="timer-control-stop",t.innerText=lang.get(lang._getLang(),"stop"),e.appendChild(t)},elements:function(){timer.elWorkRunContainer=document.querySelector("#work .run-container"),timer.elWorkRightContainer=document.querySelector("#work .right-container"),timer.elRestRunContainer=document.querySelector("#rest .run-container"),timer.elRestRightContainer=document.querySelector("#rest .right-container"),timer.elRestTime=document.querySelector("#rest .time"),timer.elWorkTime=document.querySelector("#work .time"),timer.btnTimerStart=document.querySelector("#timer-controls button#timer-control-start"),timer.btnTimerStop=document.querySelector("#timer-controls button#timer-control-stop")},events:function(){timer.btnTimerStart.addEventListener("click",function(){"stop"==timer.workTimeTempStatus||"emergency stop"==timer.workTimeTempStatus?(timer.workTimeTempStatus="start",timer.workTimeTemp=60*db.settingsTemp[2].settingsTimerBlockWorkTime,timer.runWork(),inf.show(lang.get(lang._getLang(),"timer_start"))):inf.show(lang.get(lang._getLang(),"inf_timer_start_now"))}),timer.btnTimerStop.addEventListener("click",function(){timer.workTimeTempStatus="stop",timer.workTimeTempStatus="emergency stop",inf.show(lang.get(lang._getLang(),"timer_stop"))})},reload:function(){timer.create(),timer.elements(),timer.events(),timer.setRestAndWorkDefTime()},setRestAndWorkDefTime:function(){timer.elWorkTime.innerText=db.settingsTemp[2].settingsTimerBlockWorkTime+" "+lang.get(lang._getLang(),"m"),timer.elRestTime.innerText=db.settingsTemp[2].settingsTimerBlockRestTime+" "+lang.get(lang._getLang(),"m")},runWork:function(){timer.workTimeTemp>-1&&"start"==timer.workTimeTempStatus?setTimeout(function(){timer.runWork(timer.workTimeTemp=timer.workTimeTemp-1),db.settingsTemp[2].settingsTimerBlockSoundSeconds&&new Audio("sounds/tik.mp3").play();var e=360/(60*db.settingsTemp[2].settingsTimerBlockWorkTime)*(60*db.settingsTemp[2].settingsTimerBlockWorkTime-timer.workTimeTemp);timer.workTimeTemp>-1&&"start"==timer.workTimeTempStatus&&(timer.elWorkRunContainer.style.transform="rotate("+e+"deg)",e<180?(timer.elWorkRunContainer.style.zIndex=1,timer.elWorkRightContainer.style.display="none",timer.elWorkRunContainer.style.display="block"):(timer.elWorkRunContainer.style.zIndex=3,timer.elWorkRightContainer.style.display="block"))},1e3):"emergency stop"==timer.workTimeTempStatus?timer._clearWork():(timer.workTimeTempStatus="startRest",timer.restTimeTemp=60*db.settingsTemp[2].settingsTimerBlockRestTime,timer.runRest(),timer._clearWork(),db.settingsTemp[2].settingsTimerBlockSoundEndWork&&new Audio("sounds/soundFinish.mp3").play())},_clearWork:function(){timer.workTimeTemp=0,timer.elWorkRunContainer.style.zIndex=1,timer.elWorkRunContainer.style.display="none",timer.elWorkRightContainer.style.display="none",timer.elWorkRunContainer.style.transform="rotate(0deg)"},runRest:function(){timer.restTimeTemp>-1&&"startRest"==timer.workTimeTempStatus?setTimeout(function(){timer.runRest(timer.restTimeTemp=timer.restTimeTemp-1),db.settingsTemp[2].settingsTimerBlockSoundSeconds&&new Audio("sounds/tik.mp3").play();var e=360/(60*db.settingsTemp[2].settingsTimerBlockRestTime)*(60*db.settingsTemp[2].settingsTimerBlockRestTime-timer.restTimeTemp);timer.restTimeTemp>-1&&"startRest"==timer.workTimeTempStatus&&(timer.elRestRunContainer.style.transform="rotate("+e+"deg)",e<180?(timer.elRestRunContainer.style.zIndex=1,timer.elRestRightContainer.style.display="none",timer.elRestRunContainer.style.display="block"):(timer.elRestRunContainer.style.zIndex=3,timer.elRestRightContainer.style.display="block"))},1e3):"emergency stop"==timer.workTimeTempStatus?(timer._clearWork(),timer._clearRest()):(timer._clearRest(),db.settingsTemp[2].settingsTimerBlockSoundEndRest&&new Audio("sounds/soundFinish.mp3").play())},_clearRest:function(){timer.restTimeTemp=0,timer.elRestRunContainer.style.zIndex=1,timer.elRestRunContainer.style.display="none",timer.elRestRightContainer.style.display="none",timer.elRestRunContainer.style.transform="rotate(0deg)",timer.workTimeTempStatus="stop"}};timer.start();var settings={elSettingsTimerBlockSoundSeconds:"",elSettingsTimerBlockSoundEndWork:"",elSettingsTimerBlockSoundEndRest:"",elSettingsTimerBlockWorkTime:"",elSettingsTimerBlockRestTime:"",el_settings_plan_start_day:null,el_settings_plan_end_day:null,el_settings_general_block_select:null,start:function(){settings.create(),settings.elements(),settings.events(),settings.loadSettings()},create:function(){var e=document.querySelector("#settings");e.innerHTML="";var t=document.createElement("div");t.id="settings-general-block";var n=document.createElement("h2");n.innerText=lang.get(lang._getLang(),"general"),t.appendChild(n);var a=document.createElement("h3");a.innerText=lang.get(lang._getLang(),"сhoose_your_language"),t.appendChild(a);var s=document.createElement("select");s.id="settings-general-block-select";var i=document.createElement("option");i.value="ru",i.innerText="Русский",s.appendChild(i),(i=document.createElement("option")).value="en",i.innerText="English",s.appendChild(i),a.appendChild(s),e.appendChild(t),(t=document.createElement("div")).id="settings-timer-block",(n=document.createElement("h2")).innerText=lang.get(lang._getLang(),"timer"),t.appendChild(n),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"sound_of_seconds"),t.appendChild(a);var r=document.createElement("input");r.type="checkbox",r.id="settings-timer-block-sound-seconds",a.appendChild(r);var l=document.createElement("label");l.setAttribute("for","settings-timer-block-sound-seconds"),a.appendChild(l),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"sound_of_the_end_works"),t.appendChild(a),(r=document.createElement("input")).type="checkbox",r.id="settings-timer-block-sound-end-work",a.appendChild(r),(l=document.createElement("label")).setAttribute("for","settings-timer-block-sound-end-work"),a.appendChild(l),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"sound_of_the_end_rest"),t.appendChild(a),(r=document.createElement("input")).type="checkbox",r.id="settings-timer-block-sound-end-rest",a.appendChild(r),(l=document.createElement("label")).setAttribute("for","settings-timer-block-sound-end-rest"),a.appendChild(l),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"work_time"),t.appendChild(a),(r=document.createElement("input")).type="number",r.setAttribute("min","0"),r.setAttribute("max","360"),r.id="settings-timer-block-work-time",a.appendChild(r),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"work_rest"),t.appendChild(a),(r=document.createElement("input")).type="number",r.setAttribute("min","0"),r.setAttribute("max","60"),r.id="settings-timer-block-rest-time",a.appendChild(r),e.appendChild(t),(t=document.createElement("div")).id="settings-plan-block",(n=document.createElement("h2")).innerText=lang.get(lang._getLang(),"plan"),t.appendChild(n),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"start_of_the_day"),t.appendChild(a),(r=document.createElement("input")).type="number",r.setAttribute("min","0"),r.setAttribute("max","22"),r.id="settings-plan-block-start-day",a.appendChild(r),(a=document.createElement("h3")).innerText=lang.get(lang._getLang(),"start_of_the_day"),t.appendChild(a),(r=document.createElement("input")).type="number",r.setAttribute("min","0"),r.setAttribute("max","22"),r.id="settings-plan-block-end-day",a.appendChild(r),e.appendChild(t)},reload:function(){settings.create(),settings.elements(),settings.events(),settings.loadSettings()},elements:function(){settings.elSettingsTimerBlockSoundSeconds=document.querySelector("#settings-timer-block-sound-seconds"),settings.elSettingsTimerBlockSoundEndWork=document.querySelector("#settings-timer-block-sound-end-work"),settings.elSettingsTimerBlockSoundEndRest=document.querySelector("#settings-timer-block-sound-end-rest"),settings.elSettingsTimerBlockWorkTime=document.querySelector("#settings-timer-block-work-time"),settings.elSettingsTimerBlockRestTime=document.querySelector("#settings-timer-block-rest-time"),settings.el_settings_plan_start_day=document.querySelector("#settings-plan-block-start-day"),settings.el_settings_plan_end_day=document.querySelector("#settings-plan-block-end-day"),settings.el_settings_general_block_select=document.querySelector("#settings-general-block-select")},events:function(){settings.elSettingsTimerBlockSoundSeconds.onchange=function(e){db.settingsTemp[2].settingsTimerBlockSoundSeconds=e.target.checked,db.setAllSettings()},settings.elSettingsTimerBlockSoundEndWork.onchange=function(e){db.settingsTemp[2].settingsTimerBlockSoundEndWork=e.target.checked,db.setAllSettings()},settings.elSettingsTimerBlockSoundEndRest.onchange=function(e){db.settingsTemp[2].settingsTimerBlockSoundEndRest=e.target.checked,db.setAllSettings()},settings.elSettingsTimerBlockWorkTime.onchange=function(e){settings._min_val(e,25),settings._max_val(e,120),db.settingsTemp[2].settingsTimerBlockWorkTime=e.target.value,db.setAllSettings(),timer.setRestAndWorkDefTime(),timer.workTimeTempStatus="emergency stop"},settings.elSettingsTimerBlockRestTime.onchange=function(e){settings._min_val(e,1),settings._max_val(e,60),db.settingsTemp[2].settingsTimerBlockRestTime=e.target.value,db.setAllSettings(),timer.setRestAndWorkDefTime(),timer.workTimeTempStatus="emergency stop"},settings.el_settings_plan_start_day.onchange=function(e){settings._min_val(e,1),settings._max_val(e,22),db.settingsTemp[3].settings_plan_start_day=e.target.value,db.setAllSettings(),timer.setRestAndWorkDefTime(),plan.timeInDay()},settings.el_settings_plan_end_day.onchange=function(e){settings._min_val(e,1),settings._max_val(e,23),db.settingsTemp[3].settings_plan_end_day=e.target.value,db.setAllSettings(),timer.setRestAndWorkDefTime(),plan.timeInDay()},settings.el_settings_general_block_select.onchange=function(e){""==db.settingsTemp[0]&&db.defaultData(),db.settingsTemp[0].lang=e.target.value,db.setAllSettings(),lang.reload()}},_min_val:function(e,t){(e.target.value<t||""==e.target.value)&&(e.target.value=t,inf.show("Minimal value "+t))},_max_val:function(e,t){(e.target.value>t||""==e.target.value)&&(e.target.value=t,inf.show("Minimal value "+t))},loadSettings:function(){settings.elSettingsTimerBlockSoundSeconds.checked=db.settingsTemp[2].settingsTimerBlockSoundSeconds,settings.elSettingsTimerBlockSoundEndWork.checked=db.settingsTemp[2].settingsTimerBlockSoundEndWork,settings.elSettingsTimerBlockSoundEndRest.checked=db.settingsTemp[2].settingsTimerBlockSoundEndRest,settings.elSettingsTimerBlockRestTime.value=db.settingsTemp[2].settingsTimerBlockRestTime,settings.elSettingsTimerBlockWorkTime.value=db.settingsTemp[2].settingsTimerBlockWorkTime,settings.el_settings_plan_start_day.value=db.settingsTemp[3].settings_plan_start_day,settings.el_settings_plan_end_day.value=db.settingsTemp[3].settings_plan_end_day,settings.el_settings_general_block_select.value=db.settingsTemp[0].lang,timer.setRestAndWorkDefTime()}};settings.start();var _require=require("electron"),ipcRenderer=_require.ipcRenderer,_require2=require("electron"),shell=_require2.shell;ipcRenderer.on("app-version",function(e,t){document.querySelector("footer #app-version").innerText="v."+t}),ipcRenderer.send("get-version","ping"),document.querySelector("footer").onclick=function(){shell.openExternal("http://stekolschikov.info/")};