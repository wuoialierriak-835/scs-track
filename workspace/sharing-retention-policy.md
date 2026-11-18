# Sharing and Retention Policy — Reference Shop

AI-assisted, directed by me

## Where files live
All active business records (invoices, customer lists, price lists) live in the **Shop files** Shared Drive so the business owns them rather than any single staff member. Personal My Drive is used only for rough work-in-progress drafts and personal notes.

## Sharing outside the business
Sharing files outside the sandbox domain is turned **OFF** for the practice OU, and the default link-sharing setting is **Restricted**. Staff may not set files to "Anyone with the link."

## Who can sign in
Only active staff accounts in the practice OU may sign in. Every account must enrol in **2-Step Verification** using an authenticator app within the 7-day enrolment period, and mobile devices must have basic device management and a screen lock enabled.

## What we keep, how long, where
- **What:** Customer lists, issued invoices, price lists, and offboarded staff Drive/Mail exports.
- **How long:** Financial and tax records are kept for 7 years (*to be checked with the accountant* for exact local statutory periods); temporary drafts are cleared quarterly.
- **Where:** Active records in **Shop files** Shared Drive; offboarding archives and monthly exports stored in the offline backup drive/folder outside personal accounts.

## The monthly export
On the last working day of each month, the manager runs a Google Takeout export (`.zip`) of business Drive folders and verifies that the archive opens and is stored on the external backup drive.

## Who holds admin
Two trusted administrators hold delegated admin access so the business is never locked out by a single lost phone or departed admin. Printed 2-Step Verification backup codes are kept sealed in the owner's physical safe—never in Drive or a photo.

## When someone leaves
1. Run Google Takeout for the leaver's Drive, Mail, and Calendar before suspending.
2. Transfer ownership of any remaining My Drive files and shared calendars/groups to the manager.
3. **Suspend** (never delete) the leaver's account immediately, reset their sign-in cookies, and check that external logins tied to their work email are moved.

## AI Receipt
- **What the tool named that this edition does not have:** Context-Aware Access IP rules and automated Vault retention holds (not available on this Workspace edition — struck out).
- **What it invented:** A 90-day automated inactive-account deletion rule and a mandatory weekly IT security audit committee (unrealistic for a small shop — struck out).
- **What I changed and why:** Replaced Vault holds with a manual monthly Takeout export and physical backup storage, marked the 7-year tax retention figure as *to be checked with the accountant*, and aligned sharing/2SV rules with the exact settings available in our practice OU console.
