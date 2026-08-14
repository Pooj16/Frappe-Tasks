import frappe

# @frappe.whitelist()
# def get_employees():
#     return frappe.db.get_list(
#         "Employee Record",
#         fields=[
#             "name",
#             "employee_id",
#             "employee_name",
#             "department",
#             "salary",
#             "bonus"
#         ]
#     )
# http://127.0.0.1:8000/api/method/practice_app.api.get_employees

# @frappe.whitelist()
# def get_all_employees():
#     return frappe.db.get_all(
#         "Employee Record",
#         fields=[
#             "name",
#             "employee_id",
#             "employee_name",
#             "department",
#             "salary",
#             "bonus"
#         ]
#     )
# http://127.0.0.1:8000/api/method/practice_app.api.get_all_employees
# @frappe.whitelist()
# def get_employee_salary(docname):
#     return frappe.db.get_value(
#         "Employee Record",
#         docname,
#         "salary"
#     )
# http://127.0.0.1:8000/api/method/practice_app.api.get_employee_salary?docname=fdc2ncqvn0
# @frappe.whitelist()
# def get_company_name():
#     return frappe.db.get_single_value(
#         "Company Settings",
#         "company_name"
#     )
# http://127.0.0.1:8000/api/method/practice_app.api.get_company_name
# @frappe.whitelist()
# def update_employee_salary(docname, new_salary):

#     old_salary = frappe.db.get_value(
#         "Employee Record",
#         docname,
#         "salary"
#     )

#     frappe.db.set_value(
#         "Employee Record",
#         docname,
#         "salary",
#         new_salary
#     )

#     frappe.db.commit()

#     updated_salary = frappe.db.get_value(
#         "Employee Record",
#         docname,
#         "salary"
#     )

#     return {
#         "old_salary": old_salary,
#         "new_salary": updated_salary
#     }
@frappe.whitelist()
def employee_exists(docname):
    return frappe.db.exists(
        "Employee Record",
        docname
    )
# http://127.0.0.1:8000/api/method/practice_app.api.employee_exists?docname=fdc2ncqvn0
# @frappe.whitelist()
# def count_employees():
#     return frappe.db.count("Employee Record")
# http://127.0.0.1:8000/api/method/practice_app.api.count_employees
# @frappe.whitelist()
# def delete_employee(docname):
#     result = frappe.db.delete(
#         "Employee Record",
#         {"name": docname}
#     )

#     frappe.db.commit()

#     return result
# http://127.0.0.1:8000/api/method/practice_app.api.delete_employee?docname=EMP-DEMO
# @frappe.whitelist()
# def test_savepoint(docname):
#     frappe.db.savepoint("test_point")

#     frappe.db.set_value(
#         "Employee Record",
#         docname,
#         "salary",
#         5000
#     )
#     frappe.db.commit()

#     return frappe.db.get_value(
#         "Employee Record",
#         docname,
#         "salary"
#     )
# @frappe.whitelist()
# def test_rollback(docname):
#     frappe.db.set_value(
#         "Employee Record",
#         docname,
#         "salary",
#         60000
#     )

#     changed_salary = frappe.db.get_value(
#         "Employee Record",
#         docname,
#         "salary"
#     )

#     frappe.db.rollback()

#     final_salary = frappe.db.get_value(
#         "Employee Record",
#         docname,
#         "salary"
#     )
#     frappe.db.commit()
#     return {
#         "after_update": changed_salary,
#         "after_rollback": final_salary
#     }
# http://127.0.0.1:8000/api/method/practice_app.api.test_rollback?docname=fdc2ncqvn0
# @frappe.whitelist()
# def get_employee_sql():
#     return frappe.db.sql(
#         """
#         SELECT
#             name,
#             employee_id,
#             employee_name,
#             department,
#             salary,
#             bonus
#         FROM `tabEmployee Record`
#         """,
#         as_dict=True
#     )
# http://127.0.0.1:8000/api/method/practice_app.api.get_employee_sql
# @frappe.whitelist()
# def get_employee_multisql():
#     return frappe.db.multisql({
#         "mariadb": """
#             SELECT name, employee_name, salary
#             FROM `tabEmployee Record`
#         """,
#         "postgres": """
#             SELECT name, employee_name, salary
#             FROM "tabEmployee Record"
#         """
#     }, as_dict=True)
# http://127.0.0.1:8000/api/method/practice_app.api.get_employee_multisql
# @frappe.whitelist()
# def describe_employee():
#     return frappe.db.describe("Employee Record")
# http://127.0.0.1:8000/api/method/practice_app.api.describe_employee

# @frappe.whitelist()
# def change_bonus_type():
#     result = frappe.db.change_column_type(
#         "Employee Record",
#         "bonus",
#         "decimal"
#     )

#     frappe.db.commit()

#     return result

# @frappe.whitelist()
# def add_employee_index():
#     return frappe.db.add_index(
#         "Employee Record",
#         ["employee_id"],
#         "employee_id_index"
#     )
# to verify above code is working or not you can use below command in terminal
# @frappe.whitelist()
# def check_employee_index():
#     return frappe.db.sql(
#         """
#         SHOW INDEX FROM `tabEmployee Record`
#         """,
#         as_dict=True
#     )
# @frappe.whitelist()
# def add_employee_unique():
#     return frappe.db.add_unique(
#         "Employee Record",
#         ["employee_id"],
#         "employee_id_unique"
#     )
# @frappe.whitelist()
# def bulk_update_employees():

#     updates = {
#         "fdc2ncqvn0": {
#             "bonus": 1000
#         },
#         "pjc9cjhca8": {
#             "bonus": 2000
#         }
#     }

#     frappe.db.bulk_update(
#         "Employee Record",
#         updates
#     )
#     frappe.db.commit()
#     return "Employees updated successfully"
