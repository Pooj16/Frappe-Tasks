frappe.pages['employee-dashboard'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Employee Dashboard',
		single_column: true
	});
	page.set_title("Employee Dashboard");
    page.set_title_sub("HR Management");
    page.set_indicator("Active", "green");
	page.clear_indicator();
	page.set_primary_action(
        "Add Employee",
        () => {
            frappe.new_doc("Employee Record");
        },
        "octicon octicon-plus"
    );
	 page.clear_primary_action();
	page.set_secondary_action(
        "Refresh",
        () => {
            frappe.show_alert({
                message: __("Dashboard refreshed"),
                indicator: "green"
            });
        },
        "octicon octicon-sync"
    );
	page.clear_secondary_action();
	page.add_menu_item("Show Message", () => {
        frappe.msgprint("This is a menu item");
    });
	  page.add_menu_item("Standard Message", () => {
        frappe.msgprint("This is a standard menu item");
    }, true);
	page.clear_menu();
	page.add_action_item("Show Employee Records", () => {
        frappe.set_route("List", "Employee Record");
    });
	page.clear_actions_menu();
	  page.add_inner_button("Show Welcome", () => {
        frappe.msgprint("Welcome to Employee Dashboard");
    });
	    page.add_inner_button("New Employee", () => {
        frappe.new_doc("Employee Record");
    }, "Create");
	page.clear_inner_toolbar();
	
	 page.add_inner_button("Show Form Values", () => {
        const values = page.get_form_values();

        frappe.msgprint(`
            <b>Department:</b> ${values.department || "Not selected"}<br>
            <b>Status:</b> ${values.status || "Not selected"}
        `);
    }, "Create");
	    page.change_inner_button_type("Show Welcome", null, "primary");

    page.change_inner_button_type("New Employee", "Create", "success");
	const departmentField = page.add_field({
        label: "Department",
        fieldname: "department",
        fieldtype: "Select",
        options: ["", "IT", "HR", "Finance"],

        change() {
            frappe.show_alert({
                message: __("Department selected: {0}", [
                    departmentField.get_value() || "None"
                ]),
                indicator: "blue"
            });
        }
    });
	 const statusField = page.add_field({
        label: "Status",
        fieldname: "status",
        fieldtype: "Select",
        options: ["", "Active", "Inactive", "On Leave"],

        change() {
            console.log("Status:", statusField.get_value());
        }
    });
	page.clear_fields();
    $(page.body).html(`
        <div class="frappe-card p-4">
            <h4>Employee Dashboard</h4>
            <p>Use the toolbar fields and buttons above to test the Page API.</p>
        </div>
    `);
}

   



   
