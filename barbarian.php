<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/css/stylesheets/screen.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script type="text/javascript" src="/js/app.js"></script>
        <title></title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" >
    </head>
    <body>
        <div class="wr barbarian">
            <p>Barbarian here</p>
            <div class="life-and-thp">
                <div class="life-wrap">
                    <p>Life Total</p>
                    <select>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                    <input class="life" type="text" name="life">
                </div>
                <div class="thp-wrap">
                    <p>Temp Hp</p>
                    <input class="thp" type="text" name="thp">
                </div>
                
            </div>
            
            <div class="scores">
                <div class="as-wrap">
                    <div class="as strength">
                        <p class="as-desc">Strength</p>
                        <p class="as-val">9</p>
                    </div>
                    <div class="as dexteity">
                        <p class="as-desc">Dexterity</p>
                        <p class="as-val">12</p>
                    </div>
                    <div class="as constitution">
                        <p class="as-desc">Constitution</p>
                        <p class="as-val">6</p>
                    </div>
                    <div class="as intelligence">
                        <p class="as-desc">Intelligence</p>
                        <p class="as-val">8</p>
                    </div>
                    <div class="as wisdom">
                        <p class="as-desc">Wisdom</p>
                        <p class="as-val">11</p>
                    </div>
                    <div class="as charisma">
                        <p class="as-desc">Charisma</p>
                        <p class="as-val">14</p>
                    </div>
                    <div class="clr"></div>
                </div>
                <div class="ss-wrap">
                    <div class="ss">
                        <p class="ss-desc">Acrobatics<span>5</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Animal Handling<span>7</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Arcana<span>2</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Athletics<span>9</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Deception<span>3</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">History<span>4</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Insight<span>5</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Intimidation<span>6</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Investigation<span>2</span></p>
                    </div>
                </div>
                <div class="ss-wrap">
                    <div class="ss">
                        <p class="ss-desc">Medicine<span>6</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Nature<span>8</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Perception<span>3</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Performance<span>5</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Persuasion<span>6</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Religion<span>5</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Sleight of Hand<span>4</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Stealth<span>7</span></p>
                    </div>
                    <div class="ss">
                        <p class="ss-desc">Survival<span>9</span></p>
                    </div>
                </div>
                <div class="stat-wrap">
                    <div class="stat">
                        <p class="stat-desc">
                            Armor Class
                        </p>
                        <p class="stat-val">
                            25
                        </p>
                    </div>
                    <div class="stat">
                        <p class="stat-desc">
                            Initiative
                        </p>
                        <p class="stat-val">
                            +6
                        </p>
                    </div>
                    <div class="stat">
                        <p class="stat-desc">
                            Speed
                        </p>
                        <p class="stat-val">
                            8
                        </p>
                    </div>
                </div>
                <div class="clr"></div>
            </div>
            
            <div class="aic-button">
                <p>Actions In Combat</p>
            </div>
            <div class="actions-in-combat hide">
                <div class="attack">
                    <p class="action">Attack</p>
                    <p class="description">talk abou attacks</p>
                </div>
                <div class="cast-a-spell">
                    <p class="action">Cast A Spell</p>
                    <p class="description">shoot some magic</p>
                </div>
                <div class="dash">
                    <p class="action">Dash</p>
                    <p class="description">quick get out of there</p>
                </div>
                <div class="disengage">
                    <p class="action">Disengage</p>
                    <p class="description">staying safe never hurts</p>
                </div>
                <div class="dodge">
                    <p class="action">Dodge</p>
                    <p class="description">like a shadowy ninja</p>
                </div>
                <div class="help">
                    <p class="action">Help</p>
                    <p class="description">help your friends get high</p>
                </div>
                <div class="hide">
                    <p class="action">Hide</p>
                    <p class="description">even shadowyer ninja</p>
                </div>
                <div class="ready">
                    <p class="action">Ready</p>
                    <p class="description">costs a response action</p>
                </div>
                <div class="search">
                    <p class="action">Search</p>
                    <p class="description">maybe there is a button</p>
                </div>
                <div class="use-an-object">
                    <p class="action">Use An Object</p>
                    <p class="description">try pushing the button now</p>
                </div>
            </div>
        </div>
    </body>
</html>