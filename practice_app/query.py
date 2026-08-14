import frappe

# @frappe.whitelist()
# def test_query():
#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             Employee.employee_name,
#             Employee.employee_id
#         )
#     )

#     return query.run(as_dict=True)
# @frappe.whitelist()
# def test_query():
#     Employee=frappe.qb.DocType("Employee Record")
#     query=(
#         frappe.qb.from_(Employee).select(Employee.name, Employee.salary).where(Employee.salary>1000)   
#         )

#     return query.run()
# http://127.0.0.1:8000/api/method/practice_app.query.test_query
# @frappe.whitelist()
# def test_query():
#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             Employee.employee_name,
#             Employee.employee_id
#         )
#         .where(
#             (Employee.salary > 1000) & (Employee.department == "IT")
#         )
#     )

#     return query.run(as_dict=True)

# @frappe.whitelist()
# def test_query():
#     Employee = frappe.qb.Table("tabEmployee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(Employee.employee_name, Employee.employee_id)
#     )

#     return query.run(as_dict=True)

# @frappe.whitelist()
# def test_query():
#     Employee = frappe.qb.DocType("Employee Record")

#     employee_name = frappe.qb.Field("employee_name")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(employee_name)
#     )

#     return query.run()
# import frappe
# from frappe.query_builder.functions import Count

# @frappe.whitelist()
# def test_query():
#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(Count("*").as_("total_employees"))
#     )

#     return query.run(as_dict=True)

# from frappe.query_builder.functions import Sum

# @frappe.whitelist()
# def test_query():
#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(Sum(Employee.salary).as_("total_salary"))
#     )

#     return query.run(as_dict=True)


# @frappe.whitelist()
# def test_join():

#     Employee = frappe.qb.DocType("Employee Record")
#     Department = frappe.qb.DocType("DEPT")

#     query = (
#         frappe.qb.from_(Department)
#         .inner_join(Employee)
#         .on(Employee.department == Department.department_title)
#         .select(
#             Department.department_title,
#         )
#     )

#     return query.run(as_dict=True)

# from frappe.query_builder.functions import Avg

# @frappe.whitelist()
# def test_subquery():

#     Employee = frappe.qb.DocType("Employee Record")

    
#     avg_salary = (
#         frappe.qb.from_(Employee)
#         .select(Avg(Employee.salary))
#     )

   
#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             Employee.employee_name,
#             Employee.salary
#         )
#         .where(Employee.salary > avg_salary)
#     )

#     return query.run(as_dict=True)
# http://127.0.0.1:8000/api/method/practice_app.query.test_subquery
# import frappe
# from frappe.query_builder.functions import JSONExtract

# @frappe.whitelist()
# def test_json_extract():

#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             JSONExtract(Employee.data, "$.city").as_("city")
#         )
#     )

#     return query.run(as_dict=True)
# http://127.0.0.1:8000/api/method/practice_app.query.test_json_extract
# import frappe
# from frappe.query_builder.functions import JSONValue

# @frappe.whitelist()
# def test_json_value():

#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             JSONValue(Employee.data, "$.city").as_("city")
#         )
#     )

#     return query.run(as_dict=True)

# from frappe.query_builder.functions import JSONContains

# @frappe.whitelist()
# def test_json_contains():

#     Employee = frappe.qb.DocType("Employee Record")

#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             Employee.employee_name,
#             Employee.data
#         )
#         .where(
#             JSONContains(
#                 Employee.data,
#                 {"city": "Chennai"}
#             )
#         )
#     )

#     return query.run(as_dict=True)

# from frappe.query_builder import CustomFunction

# @frappe.whitelist()
# def test_custom_function():

#     Employee = frappe.qb.DocType("Employee Record")

#     Upper = CustomFunction("UPPER", ["value"])

#     query = (
#         frappe.qb.from_(Employee)
#         .select(
#             Employee.employee_name,
#             Upper(Employee.employee_name).as_("uppercase_name")
#         )
#     )

#     return query.run(as_dict=True)
from frappe.query_builder import DocType
from frappe.query_builder.custom import ConstantColumn

@frappe.whitelist()
def test_constant_column():

    Employee = frappe.qb.DocType("Employee Record")

    query = (
        frappe.qb.from_(Employee)
        .select(
            Employee.employee_name,
            ConstantColumn("ABC").as_("company")
        )
    )

    return query.run(as_dict=True)