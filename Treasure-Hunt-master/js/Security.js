class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1");
        this.access1.position(100,90);
        this.access1.style('background', 'yellow');

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'red');

        this.access2 = createInput("Code2");
        this.access2.position(700, 195);
        this.access2.style('background', 'blue');

        this.button2 = createButton('Check');
        this.button2.position(700, 225);
        this.button2.style('background', 'red');

        this.access3 = createInput("Code3");
        this.access3.position(100, 295);
        this.access3.style('background', 'green');

        this.button3 = createButton('Check');
        this.button3.position(100, 325);
        this.button3.style('background', 'red');


        this.button4 = createButton('Cheat');
        this.button4.position(488, 138)
        this.button4.style('background', 'yellow')
    }

    display(){
        // Add code to make the buttons function as expected
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.button4.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.button4.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.button4.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(()=>{
            score = 3;
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();

            this.access1.hide();
            this.access2.hide();
            this.access3.hide();
        });
       
    }
}