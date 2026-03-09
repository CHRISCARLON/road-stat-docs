---
sidebar_position: 2
title: Endpoints
---

# Endpoints

## GET `/usrn-history`

Permit history for a USRN, broken down by fiscal year.

**Potential use cases:**
- Identify streets with repeated disruption
- Compare promoter activity across fiscal years to spot trends in emergency works or closures

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
| `top_5_promoters` | Top 5 promoters by permit volume |
| `top_5_emergency` | Top 5 promoters by emergency permits |
| `top_5_new_connections` | Top 5 promoters by new connections |

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
      "top_5_promoters": "string",
      "top_5_emergency": "string",
      "top_5_new_connections": "string"
    }
  ]
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
  ]
}
```
