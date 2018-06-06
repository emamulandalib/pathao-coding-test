const Animation = {
    position: {
        x: 0,
        y: 0
    },
    direction: {
        x: 1,
        y: 1
    },
    selectorDimension: 0,

    getWidth: () => document.querySelector('body').offsetWidth,
    getHeight: () => document.querySelector('body').offsetHeight,

    startAnimation(selector) {
        setInterval(() => {
            this.position.x += (10 * this.direction.x);
            this.position.y += (10 * this.direction.y);

            if (this.position.x > this.getWidth() - this.selectorDimension) {
                this.direction.x *= -1;
                this.position.x = this.getWidth() - this.selectorDimension;
            } else if (this.position.x < 0) {
                this.direction.x *= -1;
                this.position.x = 0;
            }

            if (this.position.y > this.getHeight() - this.selectorDimension) {
                this.direction.y *= -1;
                this.position.y = this.getHeight() - this.selectorDimension;
            } else if (this.position.y < 0) {
                this.direction.y *= -1;
                this.position.y = 0;
            }
            
            selector.style.left = this.position.x + 'px';
            selector.style.top = this.position.y + 'px';
        }, 100)
    },

    animateTheBox(selector) {
        if (selector) {
            selector.style.position = "absolute";
            selector.style.top = "50px";
            this.selectorDimension = selector.offsetWidth;
            this.startAnimation(selector)
        }
    }
}

let selector = document.querySelector('#box');
Animation.animateTheBox(selector);