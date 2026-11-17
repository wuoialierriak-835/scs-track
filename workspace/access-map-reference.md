# SCS3.1 — Reference Access Map

Who should have which access, and why? One row per person, or per identical job.

Groups are people; units are settings; every person is in one unit and many groups.

Why: the three questions in one line — what the job needs, what goes wrong with more, who decided.

This map is of an invented business and may be committed. The client's map never comes here: it lives in the client folder (Clients, in your Windows SCS folder).

| Person (job) | What the job needs | OU | Groups | Admin role | Why (one line) |
|---|---|---|---|---|---|
| The owner | Full control of the business and all Workspace settings | /Business/Leadership | owners@business.example | Super Admin | Needs complete business administration; extra super-admin accounts increase the risk of total account compromise; the owner decided. |
| The accountant (a sandbox user, ticket 4) | Accounting records, invoices and financial correspondence | /Trainees/wuoi/Staff | accounts@business.example | none (after rollback) | Needs financial records and accounting communication; more access risks billing and data deletion; the owner decided. |
| The shop manager | Staff coordination, rotas and shop operations | /Business/Management | managers@business.example | none | Needs operational coordination; access to financial administration creates unnecessary risk; the owner decided. |
| Counter staff (four) | Shared counter email and shift calendar | /Business/Front Desk | counter@business.example | none | Need shared counter communication and rotas; wider access exposes management and financial records; the shop manager decided. |
| The new starter (a sandbox user, ticket 1) | Counter email and calendar | /Trainees/wuoi/Staff/Front Desk | counter@business.example | none | Needs counter email and calendar to perform front-desk duties; additional access risks financial records; the owner decided. |
| Welders (three) | Workshop communication and job schedules | /Business/Workshop | welders@business.example | none | Need workshop schedules and job communication; wider access risks confidential business information; the workshop manager decided. |
| Drivers (two) | Delivery schedules and transport communication | /Business/Transport | drivers@business.example | none | Need delivery schedules and transport communication; additional access risks workshop and financial information; the shop manager decided. |
| Me (the admin) | Only the administration needed for assigned training tasks | /Trainees/wuoi | scs-admin-trainees@business.example | none (unless an explicitly assigned delegated role is verified) | Need limited administrative access for assigned tasks; super-admin access risks the whole environment; the owner decided. |

## The partner's cold read

Partner: ____________________.

One person with more than the job needs, or "none" and why: The owner is the only Super Admin because the business requires one accountable administrator; all other people receive only the access required for their jobs.
