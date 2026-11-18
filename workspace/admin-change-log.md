# Admin change log -- SCS3.1

Date: 2026-11-17
Sandbox admin sign-in: wuoi@<sandbox domain>
My unit: /Trainees/wuoi
Naming convention: first.last

One row per admin action, written BEFORE the click. A ticket may take several rows; add them as you go.
Logged at: the time on the laptop clock when you wrote the row.
Console path: where you expect to click, with ">" between the steps; correct it after if the console differs.
Audit log: filled in SGL/Lab -- the time the console's audit log shows for this change, or "gap:" and why.
Never write a password here. The first password is handed over by voice.

| #   | Ticket           | Logged at | What I am about to change (console path)                                      | Who or what it affects                                               | Why (the three questions, one line)                                                                           | How I checked it                                                                | Audit log |
| --- | ---------------- | --------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------- |
| 1   | 1 New starter    | 10:50     | Admin console > Directory > Users > Add new user                              | amina.okello, new Front Desk starter                                 | The job needs counter email and calendar, extra access risks financial records, the owner decided             | Verified user appears active in users list and signed in via private window     | 10:50     |
| 2   | 2 Groups         | 10:55     | Admin console > Directory > Groups > Create group                             | counter@<sandbox-domain>, counter staff                              | Staff need one shared address for shift rotas, wider access exposes management mail, the shop manager decided | Verified group page lists all counter members                                   | 10:55     |
| 3   | 3 Units          | 11:00     | Admin console > Directory > Organizational units > Create organizational unit | Front Desk under /Trainees/wuoi/Staff                                | Chat must be turned off for counter staff only while other staff keep it, the owner decided                   | Verified Front Desk OU appears in tree and moved new starter into it            | 11:00     |
| 4   | 4 Delegated role | 11:05     | Admin console > Account > Admin roles > Assign users                          | Accountant user in /Trainees/wuoi/Staff, Password Reset Admin        | The job needs password resets for staff only, full admin risks billing and data deletion, the owner decided   | Signed in as accountant and tested three actions to confirm role limits         | 11:05     |
| 5   | 5 Rollback       | 11:10     | Admin console > Account > Admin roles > Unassign users                        | Accountant user in /Trainees/wuoi/Staff, remove Password Reset Admin | The role test is complete and elevated privileges are no longer needed, the trainer decided                   | Confirmed Password Reset Admin role is removed from the accountant user profile | 11:10     |

## Gaps

none

## Audit match

You, Now

## SCS3.2 -- sharing, security, backups, offboarding (2026-11-18)

Practice OU only.  Every row written before the click; the check column filled after it.

| # | Time | What I am about to change (console path) | Who or what it affects | Why, in one line | How I checked it | Undo |
|---|---|---|---|---|---|---|
| 1 | 09:05 | Drive and Docs > Sharing settings (practice OU): sharing outside domain set to OFF | Everyone in practice OU | Keep shop files inside the business | Partner blocked when trying to share with outside address | Set back to ON |
| 2 | 09:10 | Drive and Docs > Sharing settings (practice OU): link sharing default set to Restricted | Everyone in practice OU | Prevent accidental public link sharing | New files default to Restricted | Set back to Anyone with link |
| 3 | 09:15 | Drive and Docs > Sharing settings (practice OU): allow shared drive creation | Everyone in practice OU | Enable team-owned storage in Shop files | New Shared Drive created successfully | Disable shared drive creation |
| 4 | 09:25 | Drive (new starter): changed customer-list General access to Restricted | customer-list | Close open public link | Partner's private window test showed You need access | Set back to Anyone with link |
| 5 | 09:30 | Drive (new starter): created Shared Drive Shop files, added manager, moved 3 business files | Shop files | Move business records out of personal My Drive | 3 files visible in Shop files under both managers | Move files back to My Drive |
| 6 | 10:05 | Security > Authentication > 2-step verification (practice OU): allow users to turn on 2-step | Everyone in practice OU | Enable multi-factor authentication | Option available in user security settings | Disallow 2-step verification |
| 7 | 10:10 | Security > Authentication > 2-step verification (practice OU): set new user enrolment period to 7 days | Everyone in practice OU | Give new accounts time to enrol before enforcement | Enrolment window saved on practice OU | Clear enrolment period |
| 8 | 10:15 | Security > Authentication > 2-step verification (practice OU): enforce 2-step from today | Everyone in practice OU | Require 2-step across the practice OU | New starter enrolled with authenticator app | Turn enforcement off |
| 9 | 10:25 | Devices > Mobile and endpoints > Settings (practice OU): basic management on, screen lock required | Everyone in practice OU | Protect devices accessing shop data | Settings saved for practice OU | Disable screen lock requirement |
| 10 | 11:30 | Directory > Users (practice OU): transferred Drive ownership to manager and suspended leaver account | Leaver account | Offboard leaver cleanly without losing files | Users export shows leaver Suspended; Drive log shows ownership transfer | Unsuspend leaver account |
| 11 | 15:30 | Directory > Users (practice OU): unsuspended leaver account (reset OU for next session) | Leaver account | Leave practice OU whole for SCS4.4 audit drills | Newest users export shows all 3 users Active | Suspend leaver account |
