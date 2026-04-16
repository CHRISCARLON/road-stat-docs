---
slug: /
sidebar_position: 1
title: Overview
---

# Road Stat API

Hi, I'm Chris and I'd like to introduce Road Stat.

It's a small research project that I've wanted to do for a while.

<span style={{backgroundColor: '#b8e6c8', padding: '4px 8px', fontWeight: 'bold'}}>The main aim:</span> An API for exposing datasets matched to Unique Street Reference Numbers (USRNs).

<span style={{backgroundColor: '#ffd4a8', padding: '4px 8px', fontWeight: 'bold'}}>Project focus:</span> Aggregate data at a USRN level and simplify how developers access it.

In the context of the **National Data Library**, and the wider push to find better ways to use public sector data, I believe that Unique Street Reference Numbers are an extremely valuable source of information. 

Road Stat is an experiment in aggregating this data and making it more accessible to analysts and developers. Over the next 6 months trial access will be provided and user research conducted to understand how this data can be used best.

## Project Sponsor

This project wouldn't be possible without the kind support and guidance of Neil Brammall and [Utility Information Services](https://www.utilityinformationservices.com).

## Why USRNs matter

Every street in England has a **Unique Street Reference Number (USRN)**.

USRNs are maintained by **GeoPlace** as part of the **National Street Gazetteer (NSG)**, built on the **BS7666** standard. They underpin Street Manager, integrate into the **Ordnance Survey National Geographic Database (NGD)**, and are  woven into the fabric of how location data works across the public sector for highways.

Because USRNs are the common key across so many public sector datasets, they're a natural anchor point for joining and enriching data — whether that's street works activity, soil conditions, transport access, or property information.

## The case for USRN-matched data products

Many valuable public datasets exist in isolation. Consuming them at scale, and matching them to a consistent street-level reference, can be difficult.

Road Stat is an attempt to close that gap by matching datasets to USRNs and exposing them through a simple API. The aim is data products that are:

- **Easily consumed**
- **Accessible**
- **Matched to a common street reference**

## Datasets

The API currently exposes the following datasets matched to USRNs:

- **Street Manager permit data** — aggregated street works activity from the Department for Transport, covering permits, promoters, traffic management, and road closures across England.
- **National Soil Dataset** — soil attribution data from Cranfield University's LandIS Portal (Open Data), including geology, soilscape, drainage classification, and drainage destination for each USRN.

See the [Endpoints](./endpoints) page for full details. For planned future datasets, see the [Roadmap](./roadmap) page.

## Get involved

If you're interested in using Road Stat, participating in user research, or have ideas for how this data could be used, get in touch at:  **chriscarlon@icloud.com**.

---

Street Manager data is available under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
