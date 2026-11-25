# Method note -- SCS4.1

## 1. What I set out to do
I set out to map the station network, read addresses across layers, run fault card 28 with a sealed guess, and log my SCS4.1 work cleanly without private details.

## 2. What I did, in order
I ran setup-scs4.1 and net-look, ran fault card 28 with my partner by writing my guess before the reveal and restoring DHCP afterward, and started filling in the repo files.

## 3. How I checked it worked
I checked addresses and reachability with net-look and lab device checks, verified the put-back to DHCP, and ran check-scs4.1 to see which checks passed.

## 4. What went wrong and what I did about it
My first guess attempt was stopped with Ctrl+C and net-look showed ping failures on non-station subnets, so I ran break.sh --guess properly before the reveal and kept work inside the station setup.

## 5. What I would do differently next time
I would write down every step and every zero-change ("nothing") result as I test, and pick a different card number when planting a fault card.

## 6. What I might be wrong about, and how I would find out
I might misread a symptom or assume a single cause when a device or network setting has another issue, and I would find out by walking the ladder from rung 1 and checking with an SA.
