export default function search() {
    return ( 
    <main className = "search">
        <style>{`
        #bg {
            margin: 0 auto;
            background: rgb(205, 56, 66);
            width: 600px;
            height: 1400 px;
        }

        body {
            background: white;
        }

        #searchWrap {
            position: fixed;
            width: 600px;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0%);
            z-index: 1;
            padding: 15px;
            background: #751B21;
            box-shadow: 0px 5px 2.5px black;
            
        }
        
        #searchBar {
            background: white;
            color: white;
            margin: 0 auto;
            display: block;
            width: 500px;
            padding: 10px;
            border-color: black;
        }

        #buttonWrap1 {
            z-index: 0;
            padding: 5px;
            text-align: center;
            vertical-align: middle;
        }

        #button1 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img1 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #hike1Text {
            text-align: left;
            vertical-align: middle;
            transform: translate(10%, -175%);
            font-size: 40px;
        }

        #buttonWrap2 {
            z-index: 0;
            padding: 5px;
            text-align: center;
            vertical-align: middle;
        }

        #button2 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img2 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #lakeText {
            text-align: left;
            vertical-align: middle;
            transform: translate(10%, -175%);
            font-size: 40px;
        }

        #buttonWrap3 {
            z-index: 0;
            padding: 10px;
            text-align: center;
            vertical-align: middle;
        }

        #button3 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img3 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #skiText {
            text-align: left;
            vertical-align: middle;
            transform: translate(10%, -175%);
            font-size: 40px;
        }

        #buttonWrap4 {
            z-index: 0;
            padding: 5px;
            text-align: center;
            vertical-align: middle;
        }

        #button4 {
            margin: 0 auto;
            display: block;
            position: relative;
        } 

        #img4 {
            margin: 0 auto;
            display: block;
            height: 250px;
            width: 500px;
            box-shadow: 2.5px 5px 2.5px black;
            filter: brightness(50%);
        }

        #shoppingText {
            text-align: center;
            vertical-align: middle;
            transform: translate(0%, -300%);
            font-size: 40px;
        }

        #Navigation {
            position: fixed;
            width: 600px;
            top: 90%;
            left: 50%;
            transform: translate(-50%, 0%);
            z-index: 2;
            padding: 15px;
            background: #751B21;
            display: flex;
            justify-content: space-around;
            box-shadow: 0px -5px 2.5px black;
        }

        #searchButton {
            width: 125px;
            height: 50px;
            background: white;
            color: black;
        }

        #scheduleButton {
            width: 125px;
            height: 50px;
            background: white;
            color: black;
        }

        #savedButton {
            width: 125px;
            height: 50px;
            background: white;
            color: black;
        }

        #save {
            width: 75px;
            height: 30px;
            transform: translate(250%, -140%);
            background: white;
            color: black;
        }

        #save2 {
            width: 75px;
            height: 30px;
            transform: translate(250%, -140%);
            background: grey;
            color: white;
        }

        ::placeholder {
            color: black;
        }

        ::-ms-input-placeholder {
            color: black;
        };
        }

        `}</style>
        <head>
        </head>
        <body>
            <div id="bg">
                <div id="searchWrap"><h1>Search Results: Outdoors</h1></div>
                <div id="buttonWrap1">
                    <a id="button1">
                        <img id="img1" src="https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDEyNjU5MTQvODRiN2IzOWNiYjFlZWU2NzZkNjViNjEzNDFjZjRkOTcuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=">
                        </img>
                    </a>
                    <button id="save">Save</button>
                    <div id="hike1Text">Hiking Trail (4.1)</div>
                </div>

                <div id="buttonWrap2">
                    <a id="button2">
                        <img id="img2" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/6a/cb/50/caption.jpg?w=500&h=400&s=1">
                        </img>
                    </a>
                    <button id="save2">Saved</button>
                    <div id="lakeText">Lake (4.5)</div>
                </div>

                <div id="buttonWrap3">
                    <a id="button3">
                        <img id="img3" src="https://banfflakelouise.bynder.com/m/74d2dfcd848f2990/2000x1080_jpg-2019_SunshineVillage_SoloSkier_ReubenKrabbe1.jpg"></img>
                    </a>
                    <button id="save">Save</button>
                
                    <div id="skiText">Skiing (4.9)</div>
                </div>

                <div id="Navigation">
                    <button id="searchButton">Search</button>
                    <button id="scheduleButton">Shedule</button>
                    <button id="savedButton">Saved</button>
                </div>
            </div>
        </body>
    </main>
    )
       
    
}