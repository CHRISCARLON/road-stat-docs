---
sidebar_position: 2
title: Endpoints
---

# Endpoints

All endpoints require an `X-API-Key` header for authentication.

## GET `/usrn-history`

Permit history for a USRN, broken down by fiscal year.

**Potential use cases:**
- Compare promoter activity across fiscal years to spot trends in works or traffic management types

| Field | Description |
|-------|-------------|
| `fiscal_year` | UK fiscal year (April to March) |
| `permits` | Total number of permits issued |
| `distinct_promoters` | Number of unique promoters |
| `active_months` | Months with active works |
| `emergency` | Emergency permit count |
| `signals` | Temporary traffic signals count |
| `closures` | Road closure count |
| `collaborative` | Collaborative works count |
| `avg_duration_days` | Average permit duration in days |
| `total_days_of_works` | Total days of works across all permits |
| `top_5_promoters` | Top 5 promoters by permit volume (promoter name → count) |
| `top_5_emergency` | Top 5 promoters by emergency permits (promoter name → count) |
| `top_5_new_connections` | Top 5 promoters by new connections (promoter name → count) |
| `licensing` | Data attribution — Open Government Licence v3.0 (Department for Transport) |

```json
{
  "usrn": "string",
  "fiscal_years": [
    {
      "fiscal_year": "FY 2024/25",
      "permits": 0,
      "distinct_promoters": 0,
      "active_months": 0,
      "emergency": 0,
      "signals": 0,
      "closures": 0,
      "collaborative": 0,
      "avg_duration_days": 0,
      "total_days_of_works": 0,
      "top_5_promoters": { "BT": 12, "ELECTRICITY NORTH WEST LIMITED": 5 },
      "top_5_emergency": { "BT": 3 },
      "top_5_new_connections": null
    }
  ],
  "licensing": "Contains Street Manager data © Department for Transport, licensed under the Open Government Licence v3.0."
}
```

---

## GET `/promoter-usrn-activity`

Aggregated street works activity for a specific promoter on a given USRN.

**Query parameters:**
- `usrn` — Unique Street Reference Number (numeric)
- `promoter_swa_code` — Promoter SWA code

**Potential use cases:**
- Understand how active a specific utility company is on a given street


| Field | Description |
|-------|-------------|
| `usrn` | Unique Street Reference Number |
| `street_name` | Name of the street |
| `highway_authority_swa_code` | SWA code for the highway authority |
| `highway_authority` | Name of the highway authority |
| `promoter_swa_code` | SWA code of the promoter |
| `promoter_organisation` | Name of the promoter organisation |
| `total_permits` | Total completed permits |
| `emergency_permits` | Number of emergency permits |
| `collaborative_permits` | Number of collaborative permits |
| `signals_permits` | Permits involving temporary traffic signals |
| `closures_permits` | Permits involving road closures |
| `avg_duration_days` | Average permit duration in days |
| `total_days_of_works` | Total days of works across all permits |
| `first_work_date` | Date of the earliest completed permit |
| `last_work_date` | Date of the most recent completed permit |
| `work_categories` | Permit counts broken down by work category |
| `activity_types` | Permit counts broken down by activity type |
| `licensing` | Data attribution — Open Government Licence v3.0 (Department for Transport) |

```json
{
  "usrn": "string",
  "street_name": "string",
  "highway_authority_swa_code": "string",
  "highway_authority": "string",
  "promoter_swa_code": "string",
  "promoter_organisation": "string",
  "total_permits": 0,
  "emergency_permits": 0,
  "collaborative_permits": 0,
  "signals_permits": 0,
  "closures_permits": 0,
  "avg_duration_days": 0.0,
  "total_days_of_works": 0,
  "first_work_date": "2020-04-01",
  "last_work_date": "2024-11-15",
  "work_categories": { "Minor": 10, "Standard": 3 },
  "activity_types": { "New": 8, "Remedial": 5 },
  "licensing": "Contains Street Manager data © Department for Transport, licensed under the Open Government Licence v3.0."
}
```

---

## GET `/usrn-info`

Street information and all known promoters for a USRN.

**Potential use cases:**
- Quickly identify which utility companies and authorities are active on a given street

| Field | Description |
|-------|-------------|
| `usrn` | Unique Street Reference Number |
| `highway_authority_swa_code` | SWA code for the highway authority |
| `highway_authority` | Name of the highway authority |
| `street_name` | Name of the street |
| `promoters` | List of all promoters that have worked on this street |
| `licensing` | Data attribution — Open Government Licence v3.0 (Department for Transport) |

```json
{
  "usrn": "string",
  "highway_authority_swa_code": "string",
  "highway_authority": "string",
  "street_name": "string",
  "promoters": [
    "BT",
    "ELECTRICITY NORTH WEST LIMITED (NORWEB)",
    "WIGAN METROPOLITAN BOROUGH COUNCIL"
  ],
  "licensing": "Contains Street Manager data © Department for Transport, licensed under the Open Government Licence v3.0."
}
```

---

## GET `/usrn-soil-attribution`

Soil attribution data from the National Soil Dataset matched to a USRN.

**Potential use cases:**
- Understand ground conditions on a street before planning works
- Draw possible relationships between asset health & reinstatements

| Field | Description |
|-------|-------------|
| `usrn` | Unique Street Reference Number |
| `geology` | Distinct geology classifications intersecting this USRN |
| `soilscape` | Distinct soilscape types intersecting this USRN |
| `drainage` | Distinct drainage classes intersecting this USRN |
| `drains_to` | Distinct drainage destinations intersecting this USRN |
| `licensing` | Data attribution — LandIS Open Licence (Cranfield University) |

```json
{
  "usrn": "string",
  "geology": ["Loamy and sandy soils with naturally high groundwater"],
  "soilscape": ["Freely draining slightly acid loamy soils"],
  "drainage": ["Well drained"],
  "drains_to": ["River"],
  "licensing": "LandIS Open Licence - Cranfield University"
}
```

> **Data source:** National Soil Dataset from [Cranfield University's LandIS Portal](https://www.landis.org.uk), available under the LandIS Open Licence.

---

## GET `/usrn-naptan`

NaPTAN bus stop data matched to a USRN.

**Potential use cases:**
- Identify whether a street has nearby bus stops before planning works
- Assess public transport impact of permits on a given street

| Field | Description |
|-------|-------------|
| `usrn` | Unique Street Reference Number |
| `street_type` | Whether the USRN is a regular road or motorway |
| `atco_codes` | List of ATCO codes for matched bus stops |
| `naptan_codes` | List of NaPTAN codes for matched bus stops |
| `stop_count` | Total number of bus stops matched to this USRN |
| `licensing` | Data attribution — Open Government Licence v3.0 (Department for Transport) |

```json
{
  "usrn": "string",
  "street_type": "Regular Road",
  "atco_codes": ["010A0001", "010A0002"],
  "naptan_codes": ["0500SW", "0500SX"],
  "stop_count": 2,
  "licensing": "Contains NaPTAN data © Department for Transport, licensed under the Open Government Licence v3.0."
}
```

> **Data source:** [National Public Transport Access Nodes (NaPTAN)](https://www.data.gov.uk/dataset/ff93ffc1-6656-47d8-9155-85ea0b8f2251/national-public-transport-access-nodes-naptan), published by the Department for Transport. Bus stops are matched to USRNs within a 10m buffer.

---

## GET `/uprns-per-usrn`

UPRN count for a USRN, derived from OS Linked Identifiers.

**Potential use cases:**
- Assess community impact of works on streets with high property counts
- Prioritise communications for permits affecting densely populated streets

| Field | Description |
|-------|-------------|
| `usrn` | Unique Street Reference Number |
| `uprn_count` | Number of Unique Property Reference Numbers linked to this USRN |
| `licensing` | Data attribution — Open Government Licence v3.0 (Ordnance Survey) |

```json
{
  "usrn": "string",
  "uprn_count": 142,
  "licensing": "Contains data from the Open USRN dataset and Open Linked Identifiers dataset, licensed under the Open Government Licence v3.0."
}
```

> **Data source:** [OS Linked Identifiers](https://www.ordnancesurvey.co.uk/products/os-linked-identifiers) from Ordnance Survey, available under the Open Government Licence v3.0.
