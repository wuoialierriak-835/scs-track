# Network troubleshooting log -- SCS4.1

## Fault 1 -- station fault

Symptom (the owner's words): <symptom from the SA/board in the owner's words>
My guess (device, cable or network): cable
The rung I expected to fail: 1

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked link LEDs and cable seating at both ends | nothing | 1 |
| 2 | Swapped in a known-good patch cable and checked link/reachability | <what changed> | 1 |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 1
The fault was: <fault found>
Fixed by: <how you fixed it>
Put back: yes
SA initialled the paper log (yes / not yet): not yet

## Fault 2 -- station fault

Symptom (the owner's words): <symptom from the SA/board in the owner's words>
My guess (device, cable or network): network
The rung I expected to fail: 2

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked link light and interface state on the station device | nothing | 1 |
| 2 | Checked IP address, mask, and gateway on the station device | <what changed> | 2 |
| 3 | Restored automatic IP settings and re-tested gateway reachability | <what changed> | 2 |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 2
The fault was: <fault found>
Fixed by: <how you fixed it>
Put back: yes
SA initialled the paper log (yes / not yet): not yet

## Fault 3 -- fault card, I was the fixer

Sealed log fingerprint (the 12 characters in my break.sh guess file): 57141cb73a7e
Card number (after the reveal): 28
Symptom (the owner's words, as my partner said it): Intermittent failure on two lab machines
My guess (device, cable or network): network
The rung I expected to fail: 2
My break.sh guess in one line (written before the reveal): i thing he tried to give two machines two similar ip.

| Step | What I did (one swap or one look)                                 | What changed           | Rung |
| ---- | ----------------------------------------------------------------- | ---------------------- | ---- |
| 1    | Checked IP configuration on both lab machines                     | nothing                | 2    |
| 2    | Checked for duplicate/conflicting IP addresses on the lab network | IP conflict identified | 2    |
| 3    |                                                                   |                        |      |
| 4    |                                                                   |                        |      |
| 5    |                                                                   |                        |      |
| 6    |                                                                   |                        |      |

The rung that failed: 2
The fault was: Two lab machines assigned the same static IP address
Fixed by: Restored both lab machines to automatic DHCP and verified connectivity
Proved on the lab device with the ladder (the rungs that passed after the fix): rungs 2 to 5
Put back (the undo line break.sh printed, done by hand and checked): Set both lab machines back to DHCP; checked by hand
SA initialled the paper log (yes / not yet): not yet
Was my guess right, and what did the reveal add: Yes, my guess pointed to two machines with the same IP; the reveal confirmed Card 28 (duplicate static IP assigned to two lab machines) and the partner note.

## The card I planted -- I was the partner

Card number: 28
The step break.sh printed, done by hand on the lab device (in my words, no passwords): Assigned the same static IP address to two lab machines on the lab network
The undo, done by hand after the fixer finished, and how we checked it: Set both lab machines back to DHCP and checked their addresses and connectivity
The first thing my partner's log got right: Identified the duplicate IP issue across the two lab machines
