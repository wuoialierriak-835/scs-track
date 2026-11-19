# SCS 3.2 Method Note — Sharing, Security, Backups, and Offboarding


1. Every configuration change in Google Admin Console was logged in admin-change-log.md before clicking save, with verification notes recorded immediately afterward.
2. External Drive sharing was restricted to prevent unauthorized public link access while preserving internal collaboration inside a dedicated Shared Drive.
3. Two-step verification and device rules were enforced on the organizational unit to protect accounts from credential compromise, with paper backup codes stored offline.
4. Four backup and restore drills were executed from Google Takeout and Drive archives, verifying both file contents and missing metadata such as original permissions and ownership.
5. Offboarding was tested in order: transferring Drive ownership first, suspending the leaver account, exporting audit evidence, and finally restoring the OU to active status.
6. What I might be wrong about in this client's data: I assumed all business-critical files lived in My Drive or the main Shared Drive, and that the Drive audit log had fully finished indexing; I would find out by checking orphaned files in Admin Console, interviewing department leads, and re-running the audit log export after 24 hours.
