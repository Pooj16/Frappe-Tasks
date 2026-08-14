// // // Copyright (c) 2026, Pooja and contributors

// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//     frm.add_custom_button("Check Dirty", function () {
//         frappe.msgprint(frm.is_dirty() ? "Dirty" : "Clean");
//     });

//     frm.add_custom_button("Make Dirty", function () {
//         frm.dirty();
//     });

//     frm.add_custom_button("Check New", function () {
//         frappe.msgprint(frm.is_new() ? "New Document" : "Existing Document");
//     });

// }
    

// });
// frappe.ui.form.on("Employee Record", {

//      refresh(frm) {

//         if (frm.doc.salary >= 50000) {
//              frm.set_intro("High Salary Employee", "orange");
//         } else {
//              frm.set_intro("Normal Salary Employee", "green");
//          }

//      }

// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {
//         frm.add_custom_button("Button 1", function () {
//             frappe.msgprint("Button 1 Clicked");
//         });
//         frm.add_custom_button("Button 2", function () {
//             frappe.msgprint("Button 2 Clicked");
//         });
//         frm.add_custom_button("Button 3", function () {
//             frappe.msgprint("Button 3 Clicked");
//         });
//         frm.change_custom_button_type("Button 1", null, "primary");
//         frm.remove_custom_button("Button 2");
//         frm.add_custom_button("Clear All Buttons", function () {
//             frm.clear_custom_buttons();
//             frappe.msgprint("All custom buttons removed");
//         });
//         frm.change_custom_button_type("Clear All Buttons", null, "danger");
//     }

// });
// frappe.ui.form.on("Employee Record", {

//     refresh(frm) {

//         frm.add_custom_button("Read Only", function () {
//             frm.set_df_property("salary", "read_only", 1);
//         });

//         frm.add_custom_button("Editable", function () {
//             frm.set_df_property("salary", "read_only", 0);
//         });

//         frm.add_custom_button("Mandatory", function () {
//             frm.set_df_property("bonus", "reqd", 1);
//         });

//         frm.add_custom_button("Optional", function () {
//             frm.set_df_property("bonus", "reqd", 0);
//         });

//         frm.add_custom_button("Hide Bonus", function () {
//             frm.set_df_property("bonus", "hidden", 1);
//         });

//         frm.add_custom_button("Show Bonus", function () {
//             frm.set_df_property("bonus", "hidden", 0);
//         });

//         frm.add_custom_button("Rename Salary", function () {
//             frm.set_df_property("salary", "label", "Monthly Salary");
//         });

//     }

// });
// frappe.ui.form.on("Employee Record", {

//     refresh(frm) {

     
//         frm.add_custom_button("Disable Salary", function () {
//             frm.toggle_enable("salary", false);
//         });

//         frm.add_custom_button("Enable Salary", function () {
//             frm.toggle_enable("salary", true);
//         });

   
//         frm.add_custom_button("Bonus Mandatory", function () {
//             frm.toggle_reqd("bonus", true);
//         });

//         frm.add_custom_button("Bonus Optional", function () {
//             frm.toggle_reqd("bonus", false);
//         });

//         frm.add_custom_button("Hide Bonus", function () {
//             frm.toggle_display("bonus", false);
//         });

//         frm.add_custom_button("Show Bonus", function () {
//             frm.toggle_display("bonus", true);
//         });

//     }

// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Check Bonus", function () {

//             frm.call("check_bonus", {
//                 salary: frm.doc.salary
//             }).then(r => {

//                 frappe.msgprint(r.message);

//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {

//     department(frm) {
//         frm.trigger("set_salary");
//     },

//     set_salary(frm) {

//         if (frm.doc.department === "HR") {
//             frm.set_value("salary", 40000);
//         }
//         else if (frm.doc.department === "IT") {
//             frm.set_value("salary", 60000);
//         }
//         else {
//             frm.set_value("salary", 30000);
//         }

//     }

// });

// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Document API Demo", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.employee_record.employee_record.document_demo",
//                 args: {
//                     employee_name: frm.doc.name
//                 },
//                 callback: function(r) {

//                     frappe.msgprint(`
//                         <b>Selected Employee:</b> ${r.message.selected_employee}<br>
//                         <b>Department:</b> ${r.message.selected_department}<br>
//                         <b>Last Employee:</b> ${r.message.last_employee}<br>
//                         <b>Cached Employee:</b> ${r.message.cached_employee}
//                     `);

//                 }
//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Create Demo Employee", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.employee_record.employee_record.create_demo_employee",
//                 callback: function(r) {
//                     console.log(r.message);
//                 }
//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Document Info", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.employee_record.employee_record.document_info",
//                 callback: function(r) {

//                     console.log(r.message);

//                 }
//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Document Info", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.employee_record.employee_record.document_info",

//                 callback: function(r) {

//                     console.log("Doctype:", r.message.doctype);
//                     console.log("Has Salary Field:", r.message.has_salary);
//                     console.log("Custom Fields:", r.message.custom_fields);
//                     console.log("Employees:", r.message.employees);

                 
//                     r.message.employees.forEach(function(emp) {
//                         console.log("---------------");
//                         console.log("Name:", emp.name);
//                         console.log("Employee:", emp.employee_name);
//                         console.log("Department:", emp.department);
//                         console.log("Salary:", emp.salary);
//                     });

//                 }
//             });

//         });

//     }
// });
// 
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Employee Process", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.employee_record.employee_record.employee_process",

//                 args: {
//                     employee_name: frm.doc.name
//                 },

//                 callback: function (r) {

//                     console.log("Employee:", r.message.employee);
//                     console.log("Old Salary:", r.message.old_salary);
//                     console.log("New Salary:", r.message.new_salary);
//                     console.log("Designation:", r.message.designation);
//                     console.log("Message:", r.message.message);

//                     frappe.msgprint(`
//                         <b>Employee:</b> ${r.message.employee}<br>
//                         <b>Old Salary:</b> ${r.message.old_salary}<br>
//                         <b>New Salary:</b> ${r.message.new_salary}<br>
//                         <b>Designation:</b> ${r.message.designation}<br><br>

//                         <b>Status:</b><br>
//                         ${r.message.message}
//                     `);
//                     frm.reload_doc();

//                 }

//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("DB Insert", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.employee_record.employee_record.db_insert_demo",

//                 callback: function(r){

//                     console.log(r.message);

//                     frappe.msgprint(`
//                         <b>Name:</b> ${r.message.name}<br>
//                         <b>Employee:</b> ${r.message.employee}
//                     `);

//                 }

//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {

//     refresh(frm) {

//         frm.add_custom_button("DB Update", function () {

//             frappe.call({

//                 method:
// "practice_app.practice_app.doctype.employee_record.employee_record.db_update_demo",

//                 args:{
//                     employee_name:frm.doc.name
//                 },

//                 callback:function(r){

//                     console.log(r.message);

//                     frappe.msgprint(`

//                         <b>Employee:</b> ${r.message.employee}<br>

//                         <b>Old Salary:</b> ${r.message.old_salary}<br>

//                         <b>New Salary:</b> ${r.message.new_salary}

//                     `);

//                     frm.reload_doc();

//                 }

//             });

//         });

//     }

// });

// control api

// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         $(frm.fields_dict.control_demo.wrapper).empty();

//         let leaves_control = frappe.ui.form.make_control({
//             parent: frm.fields_dict.control_demo.wrapper,
//             df: {
//                 label: "No of Leaves",
//                 fieldname: "no_of_leaves",
//                 fieldtype: "Int"
//             },

//             render_input: true
//         });
//         leaves_control.set_value(10);
//         console.log(leaves_control.get_value());
//     }
// });

// frappe.ui.form.on("Employee Record", {
//     setup(frm) {
//         frappe.meta.docfield_map["Employee Record"].department.formatter = (value) => {
//             if (value === "IT") {
//                 return "💻 IT Department";
//             }

//             if (value === "HR") {
//                 return "👥 HR Department";
//             }

//             return value || "";
//         };
//     },

//     refresh(frm) {
//         frm.set_df_property("department", "read_only", 1);
//         frm.refresh_field("department");
//     }
// });
// dialog API 

// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Employee Message", function () {

//             frappe.msgprint(
//                 "Employee Record",
//                 "Welcome to Employee Record!"
//             );

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Employee Details", function () {

//             frappe.msgprint(
//                 "Employee Details",
//                 `
//                 <b>Employee ID:</b> ${frm.doc.employee_id}<br>
//                 <b>Employee Name:</b> ${frm.doc.employee_name}<br>
//                 <b>Department:</b> ${frm.doc.department}<br>
//                 <b>Salary:</b> ${frm.doc.salary}
//                 `
//             );

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Employee Status", function () {

//             frappe.msgprint({
//                 title: "Employee",
//                 indicator: "green",
//                 message: "Employee Record Loaded Successfully"
//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Create Employee", function () {

//             frappe.msgprint({
//                 title: "Employee Record",
//                 message: "Create a new Employee Record?",

//                 primary_action: {

//                     label: "Create",

//                     action() {

//                         frappe.new_doc("Employee Record");

//                     }

//                 }

//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Throw Error", function () {

//             frappe.throw("Employee Record cannot be processed!");

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Employee Dialog", function () {

//             let d = new frappe.ui.Dialog({

//                 title: "Employee Details",

//                 fields: [
//                     {
//                         label: "Employee Name",
//                         fieldname: "employee_name",
//                         fieldtype: "Data",
//                         reqd: 1
//                     },
//                     {
//                         label: "Department",
//                         fieldname: "department",
//                         fieldtype: "Data",
//                         reqd: 1
//                     },
//                     {
//                         label: "Salary",
//                         fieldname: "salary",
//                         fieldtype: "Currency",
//                         reqd: 1
//                     },
//                     {
//                         label: "Bonus",
//                         fieldname: "bonus",
//                         fieldtype: "Currency"
//                     }
//                 ],

//                 size: "small",

//                 primary_action_label: "Submit",

//                 primary_action(values) {

//                     console.log(values);

//                     frappe.msgprint(`
//                         <b>Employee Name:</b> ${values.employee_name}<br>
//                         <b>Department:</b> ${values.department}<br>
//                         <b>Salary:</b> ${values.salary}<br>
//                         <b>Bonus:</b> ${values.bonus}
//                     `);

//                     d.hide();
//                 }

//             });

//             d.show();

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Employee Prompt", function () {

//             frappe.prompt(
//                 "Employee Name",

//                 ({ value }) => {

//                     console.log(value);

//                     frappe.msgprint({
//                         title: "Employee Details",
//                         message: "Employee Name : " + value,
//                         indicator: "green"
//                     });

//                 }
//             );

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Delete Employee", function () {

//             frappe.confirm(
//                 `Are you sure you want to delete <b>${frm.doc.employee_name}</b>?`,

//                 () => {

//                     frappe.msgprint({
//                         title: "Success",
//                         message: `${frm.doc.employee_name} deleted successfully.`,
//                         indicator: "green"
//                     });

//                 },

//                 () => {

//                     frappe.msgprint({
//                         title: "Cancelled",
//                         message: "No changes were made.",
//                         indicator: "blue"
//                     });

//                 }

//             );

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Terminate Employee", function () {

//             frappe.warn(

//                 "Terminate Employee",

//                 `You are about to terminate <b>${frm.doc.employee_name}</b>.<br><br>
//                 This action cannot be undone.`,

//                 () => {

//                     frappe.msgprint({
//                         title: "Success",
//                         message: `${frm.doc.employee_name} terminated successfully.`,
//                         indicator: "red"
//                     });

//                 },

//                 "Proceed",

//                 false

//             );

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Show Alert", function () {

//             frappe.show_alert(
//                 "Employee saved successfully!",
//                 5
//             );

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Start Import", function () {

//             let progress = 0;

//             let timer = setInterval(() => {

//                 progress += 20;

//                 frappe.show_progress(
//                     "Import Employees",
//                     progress,
//                     100,
//                     `Imported ${progress}%`
//                 );

//                 if (progress >= 100) {

//                     clearInterval(timer);

//                     frappe.show_alert({
//                         message: "Import Completed",
//                         indicator: "green"
//                     }, 3);

//                 }

//             }, 1000);

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Create HR Employee", function () {

//             frappe.new_doc("Employee Record", {
//                 employee_name: "Pooja",
//                 department: "HR"
//             });

//         });

//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {
//         frm.add_custom_button("Select Employees", () => {

//             new frappe.ui.form.MultiSelectDialog({
//                 doctype: "Employee Record",
//                 target: frm,

//                 setters: {
//                     department: frm.doc.department
//                 },

//                 action(selections) {
//                     console.log(selections);

//                     frappe.msgprint(
//                         "Selected Employees:<br><br>" +
//                         selections.join("<br>")
//                     );
//                 }
//             });

//         });
//     }
// });
// frappe.ui.form.on("Employee Record", {
//     refresh(frm) {

//         frm.add_custom_button("Add Employees", () => {

//             const dialog = new frappe.ui.Dialog({

//                 title: "Employee Details",

//                 fields: [
//                     {
//                         fieldname: "employees",
//                         fieldtype: "Table",
//                         label: "Employees",
//                         in_place_edit: true,

//                         fields: [
//                             {
//                                 fieldname: "employee_name",
//                                 label: "Employee Name",
//                                 fieldtype: "Data",
//                                 in_list_view: 1,
//                                 reqd: 1
//                             },
//                             {
//                                 fieldname: "department",
//                                 label: "Department",
//                                 fieldtype: "Data",
//                                 in_list_view: 1
//                             },
//                             {
//                                 fieldname: "salary",
//                                 label: "Salary",
//                                 fieldtype: "Currency",
//                                 in_list_view: 1
//                             }
//                         ]
//                     }
//                 ],

//                 primary_action_label: "Submit",

//                 primary_action(values) {

//                     console.log(values);

//                     frappe.msgprint(
//                         JSON.stringify(values, null, 2)
//                     );

//                     dialog.hide();
//                 }

//             });

//             dialog.show();

//         });

//     }
// });


