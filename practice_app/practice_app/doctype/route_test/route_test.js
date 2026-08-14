// Copyright (c) 2026, Pooja and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Route Test", {
// 	refresh(frm) {

// 	},
// });
// frappe.ui.form.on("Route Test", {
//     refresh(frm) {
//         console.log(frappe.get_route());
//     }
// });
// frappe.ui.form.on("Route Test", {
//     refresh(frm) {

      
//         frm.add_custom_button("Go to List", function () {
//             frappe.set_route("List", "Route Test", "List");
//         });

//     }
// });
// frappe.ui.form.on("Route Test", {
//     refresh(frm) {

//         let formatted_date = frappe.format(
//             frm.doc.date,
//             { fieldtype: "Date" }
//         );


//         frappe.msgprint(`
//             <b>frappe.format() Test</b><br><br>

//             Original Date: ${frm.doc.date}<br>
//             Formatted Date: ${formatted_date}<br><br>
//         `);
//     }
// });
// frappe.ui.form.on("Route Test", {
//     refresh(frm) {

//         frappe.provide("myapp.utils");

//         myapp.utils.message = "Hello from frappe.provide()";
//         myapp.utils.number = 100;

//         console.log("Namespace:", myapp);
//         console.log("Message:", myapp.utils.message);
//         console.log("Number:", myapp.utils.number);

//     }
// });
// frappe.ui.form.on("Route Test", {
//     refresh(frm) {

//         frappe.require(
//             "/assets/student/js/student.js",
//             function () {
//                 console.log("File loaded successfully!");
//             }
//         );

//     }
// // });

// frappe.ui.form.on("Route Test", {
//     refresh(frm) {
//         $(frm.fields_dict.chart.wrapper).html(`
//             <div id="route-test-chart"></div>
//         `);

//         // Initial empty data
//         const data = {
//             datasets: [
//                 {
//                     name: "Count",
//                     values: []
//                 }
//             ]
//         };
//         const chart = new frappe.ui.RealtimeChart(
//             "#route-test-chart",
//             "route_test_chart",
//             10,
//             {
//                 title: "Route Test Chart",
//                 data: data,
//                 type: "line",
//                 height: 300
//             }
//         );

//         chart.start_updating();

//         frm.add_custom_button("Start Chart", function () {

//             frappe.call({
//                 method: "practice_app.practice_app.doctype.route_test.route_test.update_chart",
//                 args: {
//                     docname: frm.doc.name
//                 },
//                 callback: function (r) {

//                     if (!r.exc) {
//                         frappe.show_alert({
//                             message: "Chart update started",
//                             indicator: "green"
//                         });
//                     }

//                 }
//             });

//         });
//     }
// });
// frappe.ui.form.on("Route Test", {
//     refresh(frm) {

//         $(frm.fields_dict.scanner.wrapper).html(`
//             <button class="btn btn-primary" id="scan_btn">
//                 Scan QR / Barcode
//             </button>
//         `);

//         $("#scan_btn").on("click", function() {

//             let scanner = new frappe.ui.Scanner({
//                 dialog: true,

//                 on_scan(data) {
//                     console.log("Scanned:", data);
//                 }
//             });

//         });
//     }
// });
// frappe.call({
//     method: "frappe.client.get_count",
//     args: {
//         doctype: "Route Test"
//     },
//     callback: function(r) {
//         console.log("Total Route Test records:", r.message);
//     }
// });
// http://127.0.0.1:8000/api/method/frappe.client.get_count?doctype=Route%20Test
// frappe.db.get_doc("Route Test", "pkta831nbc")
//     .then(doc => {
//         console.log("Title:", doc.title);
//         console.log("Count:", doc.count);
//         console.log("Active:", doc.active);
//     });
