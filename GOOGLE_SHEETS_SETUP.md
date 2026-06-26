# Google Sheets leadmodtagelse

Google Sheet:

- https://docs.google.com/spreadsheets/d/1EBTWjCcgnUdRxmKz_95WmRzuGyqojdiOCrYOxEazHy4/edit

Apps Script-fil:

- `google-apps-script-leads.gs`

Det gør den:

- Modtager `POST` fra formularen
- Lægger én række i arket pr. lead
- Returnerer JSON-svar

Felter fra formularen:

- `companyType`
- `companySize`
- `dailyCups`
- `machineType`
- `requirements[]`
- `name`
- `company`
- `email`
- `phone`
- `notes`
- `source`
- `submittedAt`

Sådan tager du den i brug:

1. Åbn [Google Sheet](https://docs.google.com/spreadsheets/d/1EBTWjCcgnUdRxmKz_95WmRzuGyqojdiOCrYOxEazHy4/edit)
2. Vælg `Udvidelser` -> `Apps Script`
3. Erstat standardkoden med indholdet fra `google-apps-script-leads.gs`
4. Klik `Deploy` -> `New deployment`
5. Vælg `Web app`
6. Sæt adgang til `Anyone`
7. Kopiér den genererede web app-URL
8. Sæt URL'en ind som `WEBHOOK_URL` i landingssiden

Vigtigt:

- Google Drive-pluginet giver mig adgang til dine Google-filer her i Codex.
- Det gør ikke i sig selv, at besøgendes browsere kan skrive direkte til dit Sheet.
- Til det skal der stadig være et offentligt endpoint, fx Google Apps Script eller n8n.
