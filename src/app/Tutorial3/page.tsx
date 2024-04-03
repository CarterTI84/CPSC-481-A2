export default function tutorial3() {
    return ( 
    <main className = "tutorial3">
        <style>{`
        #bg {
            margin: 0 auto;
            background: rgb(205, 56, 66);
            width: 600px;
            height: 1000px;
            text-align: center;
            color: white;
        }

        body {
            background: white;
        }

        #welcome {
           padding: 10px;
        }

        #image {
            margin: 0 auto;
            display: block;
            height: 500px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
        }

        #instructions {
            padding: 20px;
        }

        #wrapper {
            margin: 0 auto;
            text-align: center;
            width: 500px;
        }

        #but {
            background:white;
            color:black;
            text-align: center;
            width: 75px;
            height: 30px;
        }

        `}</style>
        <head></head>
        <body>
            <div id="bg">
                <h1 id="welcome">Welcome to Visit Alberta!</h1>
                <div><img id="image" src="https://cdn.discordapp.com/attachments/1195122373427478588/1214820754990960710/image.png?ex=65fa80fe&is=65e80bfe&hm=93c340cd940ab932fa042d0a3d95bf41e7d020ae7c0c1962771217b52194840d&"></img></div>
                <div><h2 id="instructions">{`An activity can be book and scheduled by pressing the schedule button and giving the information required on screen, you can view your scheduled attractions by pressing the "Schedule" button on the bottom of the screen.`}</h2></div>
                <div><button id="but">Next</button></div>
                <div id="instructions"><button id="but">Skip</button></div>
            </div>
        </body>
    </main>
    )
}