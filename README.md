# TTRPG Random Roller

<img width="1482" height="432" alt="image" src="https://github.com/user-attachments/assets/4e762c4f-94dd-4259-91ed-a79f2d0a9d54" />

<a href="https://canistag.pythonanywhere.com/ttrpg">Live Example</a>

A day/night event rolling tool for a personal TTRPG campaign.

- HTML/CSS (Pico CSS framework)
- JavaScript (frontend logic)
- Flask 
- SQLite3 (storage for encounters, etc.)

## Features

- Roll random encounters for hours of the day
- Track hours of sunlight / hours til sunrise
- Night events coming soon

## How to Run Locally
```bash
   git clone https://github.com/canistag/personal-ttrpg-random-roller.git
   cd personal-ttrpg-random-roller
   python app.py

Open http://localhost:5000
```

## Refactor Notes
Initially, each of the ten tables had a identical copy/pasted endpoint (api/weather, api/encounter, etc.). I made the decision to consolidate these into a single route backed by a table whitelist. The table names can't be passed as a SQL parameter, so this keeps the dynamic query from breaking. 
