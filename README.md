# Slots


### Getting started
#### Software requirements
- [Node.js](https://nodejs.org "Node.js") 10.19 or higher
- [Angular 8](https://www.angular.io "Angular")

#### Running the Application Locally

To start server:
```
ng serve
```
### Interface
![gameplay](./playSlots.gif)

Slots game consists of 3 reels.


###Pay table
```
3 CHERRY symbols on top line 2000\
3 CHERRY symbols on center line 1000\
3 CHERRY symbols on bottom line 4000\
3 7 symbols on any line 150\
Any combination of CHERRY and 7 on any line 75\
3 3xBAR symbols on any line 50\
3 2xBAR symbols on any line 20\
3 BAR symbols on any line 10\
Combination of any BAR symbols on any line 5
```

###Debug mode

![debugmode](./debugmode.gif)

In debug mode user can select between fixed/random mode and change money amount

### Technical info

Slots and positions in reels have their own IDs

Slot IDs:
```
1 - 3xBar\
2 - Bar\
3 - 2xBar\
4 - Seven\
5 - Cherry
```

Position IDs:

```
0 - Top\
1 - Middle\
2 - Bottom
```





