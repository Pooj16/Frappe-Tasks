// frappe.listview_settings["Employee Record"] = {

//     onload(listview) {
//         console.log("Employee List Loaded");
//     }

// };
// frappe.listview_settings["Employee Record"] = {
    
//     add_fields: [
//         "employee_id",
//         "employee_name",
//         "department",
//         "salary",
//         "bonus"
//     ],

    
//     hide_name_column: true,
//     hide_name_filter: true,

//     onload(listview) {
       
//         listview.filter_area.add([
//             ["Employee Record", "department", "=", "IT"]
//         ]);
//     },

//     before_render() {
//         console.log("Employee Record list is rendering");
//     },


//     has_indicator_for_draft: true,

//     get_indicator(doc) {
//         if (doc.department === "IT") {
//             return [__("IT"), "green", "department,=,IT"];
//         }

//         if (doc.department === "HR") {
//             return [__("HR"), "blue", "department,=,HR"];
//         }

//         return [__(doc.department || "Other"), "orange"];
//     },

   
//     // primary_action() {
//     //     frappe.new_doc("Employee Record");
//     // },

 
//     // button: {
//     //     show(doc) {
//     //         return !!doc.name;
//     //     },

//     //     get_label() {
//     //         return __("View");
//     //     },

//     //     get_description(doc) {
//     //         return __("Open Employee {0}", [
//     //             doc.employee_name || doc.name
//     //         ]);
//     //     },

//     //     action(doc) {
//     //         frappe.set_route("Form", "Employee Record", doc.name);
//     //     }
//     // },

   
//     // formatters: {
//     //     employee_name(val) {
//     //         return val ? val.bold() : "";
//     //     },

//     //     salary(val) {
//     //         return val ? `₹ ${val}` : "₹ 0";
//     //     },

//     //     bonus(val) {
//     //         return val ? `₹ ${val}` : "₹ 0";
//     //     },

//     //     department(val) {
//     //         return val ? val.toUpperCase() : "";
//     //     }
//     // }
// };
frappe.listview_settings["Employee Record"] = {
    hide_name_column: true,

    add_fields: [
        "employee_id",
        "employee_name",
        "department",
        "salary",
        "bonus"
    ],

    // Regular button for each row
    button: {
        show(doc) {
            return !!doc.name;
        },

        get_label() {
            return __("Open");
        },

        get_description(doc) {
            return __("Open Employee: {0}", [
                doc.employee_name || doc.name
            ]);
        },

        action(doc) {
            frappe.set_route("Form", "Employee Record", doc.name);
        }
    },

    // Dropdown button for each row
    dropdown_button: {
        // Important: this is text, not a function
        get_label: __("Actions"),

        buttons: [
            {
                get_label: __("Show Employee ID"),

                show(doc) {
                    return !!doc.employee_id;
                },

                get_description(doc) {
                    return __("Show ID of {0}", [
                        doc.employee_name || doc.name
                    ]);
                },

                action(doc) {
                    frappe.msgprint(
                        __("Employee ID: {0}", [doc.employee_id])
                    );
                }
            },

            {
                get_label: __("Show Salary"),

                show(doc) {
                    return !!doc.salary;
                },

                get_description(doc) {
                    return __("Show salary for {0}", [
                        doc.employee_name || doc.name
                    ]);
                },

                action(doc) {
                    frappe.msgprint(
                        __("Salary: ₹ {0}", [doc.salary])
                    );
                }
            },

            {
                get_label: __("Show Department"),

                show(doc) {
                    return !!doc.department;
                },

                get_description(doc) {
                    return __("Show department for {0}", [
                        doc.employee_name || doc.name
                    ]);
                },

                action(doc) {
                    frappe.msgprint(
                        __("Department: {0}", [doc.department])
                    );
                }
            }
        ]
    },

    // Format values in the List View
    formatters: {
        employee_name(val) {
            return val ? val.bold() : "";
        },

        salary(val) {
            return val ? `INR ${val}` : "INR 0";
        },

        bonus(val) {
            return val ? `INR ${val}` : "INR 0";
        },

        department(val) {
            return val ? val.toUpperCase() : "";
        }
    }
};