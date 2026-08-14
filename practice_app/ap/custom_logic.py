import frappe


def user_validate(doc, method):
    frappe.msgprint("Hook executed!")