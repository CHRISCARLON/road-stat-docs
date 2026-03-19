---
slug: /
sidebar_position: 1
title: Overview
---

# Road Stat API

Hi, I'm Chris and I'd like to introduce Road Stat.

It's a small research project that I've wanted to do for a while.

<span style={{backgroundColor: '#b8e6c8', padding: '4px 8px', fontWeight: 'bold'}}>The main aim:</span> Explore aggregated data products at a USRN level.

<span style={{backgroundColor: '#ffd4a8', padding: '4px 8px', fontWeight: 'bold'}}>Project focus:</span> Aggregate the Department for Transport's Street Manager data and make it simple to explore street works activity across England.

In the context of the **National Data Library**, and the wider push to find better ways to use public sector data, I believe that Street Manager is an extremely valuable source of information. 

It captures every permit, every road closure, and every utility company work across England's publicly maintained highway network.

Road Stat is an experiment in aggregating this data and making it more accessible to analysts and developers. Over the next 6 months trial access will be provided and user research conducted to understand how this data can be used best.

## Project Sponsor

This project wouldn't be possible without the kind support and guidance of Neil Brammall and [Utility Information Services](https://www.utilityinformationservices.com).

## Why USRNs matter

Every street in England has a **Unique Street Reference Number (USRN)**.

USRNs are maintained by **GeoPlace** as part of the **National Street Gazetteer (NSG)**, built on the **BS7666** standard. They underpin Street Manager, integrate into the **Ordnance Survey National Geographic Database (NGD)**, and are  woven into the fabric of how location data works across the public sector for highways.

By aggregating Street Manager permit data at the USRN level, the API provides a clear picture of what's happening on any given street — who's digging and how often.

## The case for better USRN data products

Street Manager holds a wealth of data, but consuming it at scale can be quite difficult at times.

There's a gap between the raw data and the insights. We need more USRN data products that are:

- **Easily consumed**
- **Accessible**
- **Aggregated**

## Future endpoints

We're working on additional endpoints to enrich USRN-level data:

- **UPRN counts per USRN** — number of unique property reference numbers on a street, giving a sense of how many properties are affected by works.
- **Bus services per USRN** — using Bus Open Data Service open data to show which bus services run on a particular USRN and are impacted by  works.

## Get involved

If you're interested in using Road Stat, participating in user research, or have ideas for how this data could be used, get in touch at:  **chriscarlon@icloud.com**.

---

Street Manager data is available under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
