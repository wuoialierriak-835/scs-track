# Router hardening record -- SCS4.1

Date: 2026-11-25
Station and router (the kit station's router, never the campus): Station X
Admin page address (the router's own address):192.168.8.1
DHCP range:192.168.8. 100 - 200
Firmware date seen on the router:2026-06-26

Tick a line [x] only when it is done and checked. A line not done says why, on the same line.
Never write a password here. The admin password and the wifi passphrase go on the owner's card, and on the
kit the owner's card goes to the SA. The screenshot goes to ~/scs/evidence/scs4.1, checked for passwords first.

1. [x] Admin password changed from the default, on the owner's card, nowhere on the wall
2. [x] Wifi on WPA2 or WPA3 with a long passphrase -- three words and a number, not the shop's phone number
3. [x] Network name gives away neither the router model nor the owner's name
4. [x] A guest network for customers, so the till and the printer are not on the strangers' wifi
5. [x] DHCP range noted; the printer's address reserved on the router (or fixed on the printer outside the range)
6. [x] WPS off; remote admin from the internet off
7. [x] Firmware date noted; an update only if the SA says it is safe today
8. [x] Router restarted afterwards and the four numbers read again on a laptop -- still right

## The printer

Printer's address (from its own panel or test page):10.10.15.37
Reserved on the router (yes / no):yes
Added on a lab laptop by address, test page printed (yes / no):yes
Added on a phone, test page printed (yes / no):yes
Router restarted without the reservation first -- what happened:gets a new address
Second look, the next SCS track day -- still at its address after the SAs' power-off (yes / no): no
Anything mechanical, named and referred (not opened): none
