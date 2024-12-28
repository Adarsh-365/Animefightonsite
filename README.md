# Anime Fight - Satoru Gojo vs Toji Fushiguro

This project demonstrates a scroll-triggered animation of a fight between Satoru Gojo and Toji Fushiguro. The animation is triggered as you scroll through the site, showcasing various frames of the battle using images that change dynamically based on the scroll position. 

The website uses **GSAP** (GreenSock Animation Platform) for scroll animations and **Locomotive Scroll** for smooth scrolling, offering a seamless experience when interacting with the page.

## Demo

You can view the demo of the project here: [Anime Fight - Satoru Gojo vs Toji Fushiguro](https://adarsh-365.github.io/animefight/).

## Features

- **Smooth scrolling**: Uses Locomotive Scroll for a smooth and intuitive scrolling experience.
- **Dynamic animation**: The animation of the fight is triggered based on scroll position, with images changing as the user scrolls.
- **Pinned sections**: Several sections of the page are pinned while scrolling to provide a more immersive experience.
- **Custom canvas rendering**: The canvas renders and scales the images to fill the screen dynamically.

## Technologies Used

- **HTML5**: Structure and content of the website.
- **CSS3**: Styling of the website.
- **JavaScript**: For scroll-based animations and canvas rendering.
- **GSAP**: Animation library used to create smooth scroll-triggered effects.
- **Locomotive Scroll**: Used for smooth scrolling across the page.
- **Canvas API**: Used to render and display the frame-by-frame images of the fight.

## Setup

To set up and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/adarsh-365/animefight.git
'''
Navigate to the project folder:

```bash
cd animefight
```
Open the index.html file in your browser:

```bash
open index.html
```
## How it Works
Locomotive Scroll is initialized, and smooth scrolling is enabled on the main container (#main).
ScrollTrigger is used to link animations to the scroll position, such as the frame-based animation of the fight between Gojo and Toji.
The images of the fight are loaded dynamically and mapped to the scroll position using GSAP animations.
The canvas element is resized and re-rendered on window resize to maintain the responsiveness of the animation.
Key Features of ScrollTrigger

Pinning sections: Certain sections like #page1, #page2, and #page3 are pinned in place while scrolling.
Scroll-linked animation: The fight animation is linked to the scroll, making each scroll action advance the frame of the animation.
License
