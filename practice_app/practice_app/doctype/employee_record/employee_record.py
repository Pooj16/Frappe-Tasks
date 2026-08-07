# Copyright (c) 2026, Pooja and contributors
# For license information, please see license.txt

# import frappe
# import frappe
# from frappe.model.document import Document

# class EmployeeRecord(Document):

#     @frappe.whitelist()
#     def check_bonus(self, salary):

#         if salary >= 50000:
#             return "Eligible for 20% Bonus"
#         elif salary >= 30000:
#             return "Eligible for 10% Bonus"
#         else:
#             return "Not Eligible for Bonus"
import frappe
from frappe.model.document import Document

class EmployeeRecord(Document):
    pass
    


# @frappe.whitelist()
# def document_demo(employee_name):
#     employee = frappe.get_doc("Employee Record", employee_name)

#     last_employee = frappe.get_last_doc("Employee Record")

#     cached_employee = frappe.get_cached_doc("Employee Record", employee_name)

#     return {
#         "selected_employee": employee.employee_name,
#         "selected_department": employee.department,
#         "last_employee": last_employee.employee_name,
#         "cached_employee": cached_employee.employee_name
#     }
# import frappe

# @frappe.whitelist()
# def create_demo_employee():

#     doc = frappe.new_doc("Employee Record")
#     doc.employee_name = "Demo Employee"
#     doc.department = "HR"
#     doc.salary = 40000
#     doc.insert()

#     new_name = doc.name

#     renamed = frappe.rename_doc(
#         "Employee Record",
#         new_name,
#         "EMP-DEMO"
#     )


#     frappe.delete_doc("Employee Record", renamed)

#     return "Created, Renamed and Deleted Successfully"

# @frappe.whitelist()
# def document_info():
#     frappe.only_for("System Manager")
#     meta = frappe.get_meta("Employee Record")
#     employee_list = frappe.get_all(
#         "Employee Record",
#         fields=["name"],
#         limit=5
#     )
#     employees = []
#     for emp in employee_list:
#         doc = frappe.get_doc("Employee Record", emp.name)

#         employees.append({
#             "name": doc.name,
#             "employee_name": doc.employee_name,
#             "department": doc.department,
#             "salary": doc.salary
#         })
#     return {
#         "doctype": meta.name,
#         "has_salary": meta.has_field("salary"),
#         "custom_fields": [d.fieldname for d in meta.get_custom_fields()],
#         "employees": employees
#     }


# @frappe.whitelist()
# def document_methods(employee_name):
#     doc = frappe.get_doc("Employee Record", employee_name)
#     old_doc = doc.get_doc_before_save()
#     old_salary = doc.salary
#     doc.salary += 5000
#     salary_changed = doc.has_value_changed("salary")
#     doc.save()
#     doc.reload()
#     doc.check_permission("write")
#     title = doc.get_title()
#     doc.notify_update()
#     url = doc.get_url()
#     return {
#         "employee": doc.employee_name,
#         "old_salary": old_salary,
#         "new_salary": doc.salary,
#         "salary_changed": salary_changed,
#         "title": title,
#         "url": url
#     }

# @frappe.whitelist()
# def document_methods(employee_name):

#     doc = frappe.get_doc("Employee Record", employee_name)

#     old_salary = doc.salary

#     # Update salary directly in database
#     doc.db_set("salary", old_salary + 5000)

#     # Reload latest values
#     doc.reload()

#     # Mark as seen
#     doc.add_seen()

#     # Add a view
#     doc.add_viewed()

#     # Add a tag
#     doc.add_tag("Document API Demo")

#     return {
#         "employee": doc.employee_name,
#         "old_salary": old_salary,
#         "new_salary": doc.salary,
#         "tags": doc.get_tags()
#     }
# import frappe

# @frappe.whitelist()
# def document_methods(employee_name):

#     doc = frappe.get_doc("Employee Record", employee_name)

#     old_salary = doc.salary

#     doc.db_set("salary", old_salary + 5000)

#     doc.reload()

#     doc.add_seen()
#     doc.add_viewed()

#     document_tags = doc.get_tags()

#     comment = f"Salary updated from {old_salary} to {doc.salary}"

#     doc.add_comment(
#         "Comment",
#         comment
#     )

#     database_tags = frappe.get_all(
#         "Tag Link",
#         filters={
#             "document_type": "Employee Record",
#             "document_name": employee_name
#         },
#         pluck="tag"
#     )

#     return {
#         "employee": doc.employee_name,
#         "old_salary": old_salary,
#         "new_salary": doc.salary,
#         "document_tags": document_tags,
#         "database_tags": database_tags,
#         "comment": comment
#     }
import time
import frappe
from frappe.model.document import Document

class EmployeeRecord(Document):

    def apply_promotion(self):

        old_salary = self.salary

        self.salary += 5000
        self.designation = "Senior Employee"

        self.save()

        return {
            "old_salary": old_salary,
            "new_salary": self.salary,
            "designation": self.designation
        }


    def generate_employee_summary(self):

        

        self.add_comment(
            "Comment",
            f"Background Summary Generated for {self.employee_name}"
        )

        frappe.logger().info(
            f"Summary generated for {self.name}"
        )
@frappe.whitelist()
def employee_process(employee_name):

    doc = frappe.get_doc("Employee Record", employee_name)
    result = doc.run_method("apply_promotion")
    doc.queue_action("generate_employee_summary")

    return {
        "employee": doc.employee_name,
        "old_salary": result["old_salary"],
        "new_salary": result["new_salary"],
        "designation": result["designation"],
        "message": "Promotion applied immediately. Summary generation queued in background."
    }
# @frappe.whitelist()
# def db_insert_demo():

#     doc = frappe.new_doc("Employee Record")

#     doc.employee_name = "Database Employee"
#     doc.department = "IT"
#     doc.salary = 35000

#     doc.db_insert()

#     return {
#         "name": doc.name,
#         "employee": doc.employee_name
#     }
# @frappe.whitelist()
# def db_update_demo(employee_name):

#     doc = frappe.get_doc(
#         "Employee Record",
#         employee_name
#     )

#     old_salary = doc.salary

#     doc.salary += 10000

#     doc.db_update()

#     return {

#         "employee": doc.employee_name,

#         "old_salary": old_salary,

#         "new_salary": doc.salary

#     }
