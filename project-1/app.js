const Animation = {
    getWidth: () => document.querySelector('body').offsetWidth,
    getHeight: () => document.querySelector('body').offsetHeight,
    goUpDown: true,
    goLeftRight: false,
    corner: 1,

    startAnimation(selector) {
        setInterval(() => {
            if (this.goUpDown) {
                selector.style.top = (this.corner === 3) ? 0 : this.getHeight() - 100
                this.goLeftRight = true
                this.goUpDown = false
                this.corner += 1
            } else {
                selector.style.left = (this.corner === 4) ? 0 : this.getWidth() - 100
                this.goUpDown = true
                this.goLeftRight = false
                this.corner += 1
            }

            if (this.corner > 4) this.corner = 1;

            console.log(this.corner);
        }, 1000)
    },

    animateTheBox(selector) {
        if (selector) {
            selector.style.position = "absolute";
            selector.style.top = "50px";
            this.startAnimation(selector)
        }
    }
}

let selector = document.querySelector('#box');
Animation.animateTheBox(selector);