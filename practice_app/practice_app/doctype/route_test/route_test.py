# Copyright (c) 2026, Pooja and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RouteTest(Document):
	pass
import time



@frappe.whitelist()
def update_chart(docname):


    frappe.get_doc("Route Test", docname)

 
    for i in range(1, 6):

        value = i * 10

        frappe.publish_realtime(
            "route_test_chart",
            {
                "label": i,
                "points": [value]
            },
            doctype="Route Test",
            docname=docname
        )

        time.sleep(1)
        
