---
sidebar_position: 3
title: Roadmap
---

# Roadmap

This page outlines datasets we're planning to add to the API. All future endpoints will follow the same pattern — datasets matched and exposed at the USRN level.

## Planned datasets

### NaPTAN — Public Transport Access Nodes

The [National Public Transport Access Node (NaPTAN)](https://www.data.gov.uk/dataset/ff93ffc1-6656-47d8-9155-85ea0b8f2251/national-public-transport-access-nodes-naptan) dataset is published by the Department for Transport and covers all public transport stop points in Great Britain — bus stops, railway stations, etc.


**Why it matters:** Street works that affect bus stops or public transport routes have a direct impact on passengers and operators. Matching NaPTAN data to USRNs would allow analysts and transport planners to quickly identify whether a permit is likely to affect public transport access.

---

### UPRN counts per USRN

Using [OS Linked Identifiers](https://www.ordnancesurvey.co.uk/products/os-linked-identifiers) from Ordnance Survey, this endpoint would expose the number of Unique Property Reference Numbers (UPRNs) matched to each USRN. OS Linked Identifiers provides the cross-reference between UPRNs and USRNs, making it the natural source for this matching.

**Why it matters:** A high UPRN count on a street with frequent or long-duration works is a useful indicator of community impact.

---

### Bus services per USRN

Using open data from the [Bus Open Data Service (BODS)](https://www.bus-data.dft.gov.uk), this endpoint would show which registered bus services operate along a given USRN (this would make use of the matched NapTAN data)

**Why it matters:** Identifying which bus routes pass through a street under works helps operators and local authorities assess disruption risk and plan diversions.

---

## Get involved

If you have ideas for additional datasets that would be valuable at the USRN level, get in touch at **chriscarlon@icloud.com**.
