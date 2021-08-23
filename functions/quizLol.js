const clickQUIZLOL = document.getElementById('linkQUIZLOL')


document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'linkQUIZLOL') {

        while (document.body.lastElementChild) {
            document.body.removeChild(document.body.lastElementChild);
        }

        var textExplicationImg = 'Page d\'acceuil du quiz'
        var txtExplicationProjet = 'Ce projet consistait à coder un quiz sur un jeu que j\'affectionne particulièrement (League of Legends). ' +
            'Le quiz a plusieurs difficultés et est composé pour chacune d\'elles de quatres questions et de quatres réponses proposées par question.'

        // crée un nouvel élément div



        /////////////////////////////////////// AFFICHAGE MENU ///////////////////////////////////////



        var divMenu = document.createElement('div')
        divMenu.id = 'menu'
        divMenu.className = 'menu'
        var txtDivMenu = document.createTextNode('Portfolio Maxime Sausset')

        var navBar = document.createElement('nav')
        navBar.id = 'navMenu'

        var globalUl = document.createElement('ul')

        var liAccueil = document.createElement('li')

        var aAccueil = document.createElement('a')
        aAccueil.href = 'index.html'
        var txtAccueil = document.createTextNode('ACCUEIL')

        var liStages = document.createElement('li')
        liStages.className = 'roll'

        var aStages = document.createElement('a')
        var txtStages = document.createTextNode('STAGES')

        var ulStages = document.createElement('ul')
        ulStages.className = 'underRoll'

        var liFirstStage = document.createElement('li')

        var aFirstStage = document.createElement('a')
        aFirstStage.id = "linkFirstStage"
        aFirstStage.href = '#rapport-stage-premiere-annee'
        var txtFirstStage = document.createTextNode('STAGE PREMIÈRE ANNÉE BTS')

        var liSecondStage = document.createElement('li')

        var aSecondStage = document.createElement('a')
        aSecondStage.id = "linkSecondStage"
        aSecondStage.href = '#rapport-stage-seconde-annee'
        var txtSecondStage = document.createTextNode('STAGE SECONDE ANNÉE BTS')

        var liProjets = document.createElement('li')
        liProjets.className = 'roll'

        var aProjets = document.createElement('a')
        var txtProjets = document.createTextNode('PROJETS')

        var ulProjets = document.createElement('ul')
        ulProjets.className = 'underRoll'

        var liGSBPHP = document.createElement('li')

        var aGSBPHP = document.createElement('a')
        aGSBPHP.id = 'linkGSBPHP'
        aGSBPHP.href = '#gsb-php'
        var txtGSBPHP = document.createTextNode('GSB PHP')

        var liGSBZEND = document.createElement('li')

        var aGSBZEND = document.createElement('a')
        aGSBZEND.id = 'linkGSBZEND'
        aGSBZEND.href = '#gsb-zend'
        var txtGSBZEND = document.createTextNode('GSB ZEND')

        var liGSBJAVA = document.createElement('li')

        var aGSBJAVA = document.createElement('a')
        aGSBJAVA.id = 'linkGSBJAVA'
        aGSBJAVA.href = '#gsb-java'
        var txtGSBJAVA = document.createTextNode('GSB JAVA')

        var liJAVAANDROID = document.createElement('li')

        var aJAVAANDROID = document.createElement('a')
        aJAVAANDROID.id = 'linkJAVAANDROID'
        aJAVAANDROID.href = '#java-android'
        var txtJAVAANDROID = document.createTextNode('JAVA ANDROID')

        var liPFC = document.createElement('li')

        var aPFC = document.createElement('a')
        aPFC.id = 'linkPFC'
        aPFC.href = '#pierre-feuille-ciseaux'
        var txtPFC = document.createTextNode('PIERRE FEUILLE CISEAUX')

        var liTESTPURETE = document.createElement('li')

        var aTESTPURETE = document.createElement('a')
        aTESTPURETE.id = 'linkTESTPURETE'
        aTESTPURETE.href = '#test-purete'
        var txtTESTPURETE = document.createTextNode('TEST DE PURETÉ')

        var liQUIZLOL = document.createElement('li')

        var aQUIZLOL = document.createElement('a')
        aQUIZLOL.id = 'linkQUIZLOL'
        aQUIZLOL.href = '#quiz-lol'
        var txtQUIZLOL = document.createTextNode('QUIZ')

        var liMORPION = document.createElement('li')

        var aMORPION = document.createElement('a')
        aMORPION.id = 'linkMORPION'
        aMORPION.href = '#morpion'
        var txtMORPION = document.createTextNode('MORPION')

        var liRsxSociaux = document.createElement('li')
        liRsxSociaux.className = 'roll'

        var aRsxSociaux = document.createElement('a')
        var txtRsxSociaux = document.createTextNode('RÉSEAUX SOCIAUX')

        var ulRsxSociaux = document.createElement('ul')
        ulRsxSociaux.className = 'underRoll'

        var liLinkedin = document.createElement('li')

        var aLinkedin = document.createElement('a')
        aLinkedin.href = 'https://www.linkedin.com/in/maxime-sausset-472597182/'
        aLinkedin.target = '_blank'
        var txtALinkedin = document.createTextNode('LinkedIn')

        var liGitHub = document.createElement('li')

        var aGitHub = document.createElement('a')
        aGitHub.href = 'https://github.com/msausset'
        aGitHub.target = '_blank'
        var txtAGitHub = document.createTextNode('GitHub')



        /////////////////////////////////////// AFFICHAGE LIEN ///////////////////////////////////////



        var divGlobale = document.createElement('div')
        divGlobale.id = 'divGlobale'
        divGlobale.className = 'page'

        var divProjects = document.createElement('div')
        divProjects.className = 'titleProjects'
        var txtProjects = document.createTextNode('QUIZ LOL')

        var divExpImg = document.createElement("div")
        divExpImg.className = "expImg"

        var pTxtExpImg = document.createElement('p')
        pTxtExpImg.className = 'textExpImg'
        var txtExpImg = document.createTextNode(`${textExplicationImg}`)

        var divMarginBot = document.createElement("div")
        divMarginBot.className = "expImg"

        var pTxtMarginBot = document.createElement('p')
        pTxtMarginBot.className = 'textMarginBot'
        var txtMarginBot = document.createTextNode('-')

        var pGoalProject = document.createElement('h2')
        var txtPGoal = document.createTextNode('But du Projet')

        var pGoal = document.createElement('p')
        pGoal.className = 'textProject'
        var pTxtGoal = document.createTextNode(`${txtExplicationProjet}`)

        var divImg = document.createElement('div')
        divImg.className = 'globalProject'

        var divArrowImg1 = document.createElement('div')
        divArrowImg1.className = 'divArrowImg1'

        var divArrowPrevious = document.createElement('img')
        divArrowPrevious.id = 'previousArrow'
        divArrowPrevious.className = 'arrowImg'
        divArrowPrevious.src = './images/ARROWS/Previous_Arrow.png'

        var divImgProject = document.createElement('div')
        divImgProject.className = 'divImgProject'

        var img1 = document.createElement('img')
        img1.id = 'quizlol0'
        img1.className = 'imgCurrent'
        img1.src = './images/QUIZ_LOL/Quiz_LOL_Presentation.PNG'

        var aImg1 = document.createElement('a')
        aImg1.href = './images/QUIZ_LOL/Quiz_LOL_Presentation.PNG'

        var img2 = document.createElement('img')
        img2.id = 'quizlol1'
        img2.className = 'imgProject'
        img2.src = './images/QUIZ_LOL/Quiz_LOL_Question_Tres_Facile.PNG'

        var aImg2 = document.createElement('a')
        aImg2.href = './images/QUIZ_LOL/Quiz_LOL_Question_Tres_Facile.PNG'

        var img3 = document.createElement('img')
        img3.id = 'quizlol2'
        img3.className = 'imgProject'
        img3.src = './images/QUIZ_LOL/Quiz_LOL_Fin_Tres_Facile.PNG'

        var aImg3 = document.createElement('a')
        aImg3.href = './images/QUIZ_LOL/Quiz_LOL_Fin_Tres_Facile.PNG'

        var img4 = document.createElement('img')
        img4.id = 'quizlol3'
        img4.className = 'imgProject'
        img4.src = './images/QUIZ_LOL/Quiz_LOL_Question_Facile.PNG'

        var aImg4 = document.createElement('a')
        aImg4.href = './images/QUIZ_LOL/Quiz_LOL_Question_Facile.PNG'

        var img5 = document.createElement('img')
        img5.id = 'quizlol4'
        img5.className = 'imgProject'
        img5.src = './images/QUIZ_LOL/Quiz_LOL_Fin_Facile.PNG'

        var aImg5 = document.createElement('a')
        aImg5.href = './images/QUIZ_LOL/Quiz_LOL_Fin_Facile.PNG'

        var img6 = document.createElement('img')
        img6.id = 'quizlol5'
        img6.className = 'imgProject'
        img6.src = './images/QUIZ_LOL/Quiz_LOL_Question_Difficile.PNG'

        var aImg6 = document.createElement('a')
        aImg6.href = './images/QUIZ_LOL/Quiz_LOL_Question_Difficile.PNG'

        var img7 = document.createElement('img')
        img7.id = 'quizlol6'
        img7.className = 'imgProject'
        img7.src = './images/QUIZ_LOL/Quiz_LOL_Fin_Difficile.PNG'

        var aImg7 = document.createElement('a')
        aImg7.href = './images/QUIZ_LOL/Quiz_LOL_Fin_Difficile.PNG'

        var img8 = document.createElement('img')
        img8.id = 'quizlol7'
        img8.className = 'imgProject'
        img8.src = './images/QUIZ_LOL/Quiz_LOL_Question_Tres_Difficile.PNG'

        var aImg8 = document.createElement('a')
        aImg8.href = './images/QUIZ_LOL/Quiz_LOL_Question_Tres_Difficile.PNG'

        var img9 = document.createElement('img')
        img9.id = 'quizlol8'
        img9.className = 'imgProject'
        img9.src = './images/QUIZ_LOL/Quiz_LOL_Fin_Tres_Difficile.PNG'

        var aImg9 = document.createElement('a')
        aImg9.href = './images/QUIZ_LOL/Quiz_LOL_Fin_Tres_Difficile.PNG'

        var divArrowImg2 = document.createElement('div')
        divArrowImg2.className = 'divArrowImg2'

        var divArrowNext = document.createElement('img')
        divArrowNext.id = 'nextArrow'
        divArrowNext.className = 'arrowImg'
        divArrowNext.src = './images/ARROWS/Next_Arrow.png'


        /////////////////////////////////////// CREATION MENU ///////////////////////////////////////


        divMenu.appendChild(txtDivMenu)
        divMenu.appendChild(navBar)
        navBar.appendChild(globalUl)
        globalUl.appendChild(liAccueil)
        aAccueil.appendChild(txtAccueil)
        liAccueil.appendChild(aAccueil)
        globalUl.appendChild(liStages)
        aStages.appendChild(txtStages)
        liStages.appendChild(aStages)
        liStages.appendChild(ulStages)
        ulStages.appendChild(liFirstStage)
        liFirstStage.appendChild(aFirstStage)
        aFirstStage.appendChild(txtFirstStage)
        liSecondStage.appendChild(aSecondStage)
        aSecondStage.appendChild(txtSecondStage)
        ulStages.appendChild(liSecondStage)
        globalUl.appendChild(liProjets)
        aProjets.appendChild(txtProjets)
        liProjets.appendChild(aProjets)
        liProjets.appendChild(ulProjets)
        ulProjets.appendChild(liGSBPHP)
        liGSBPHP.appendChild(aGSBPHP)
        aGSBPHP.appendChild(txtGSBPHP)
        ulProjets.appendChild(liGSBZEND)
        liGSBZEND.appendChild(aGSBZEND)
        aGSBZEND.appendChild(txtGSBZEND)
        ulProjets.appendChild(liGSBJAVA)
        liGSBJAVA.appendChild(aGSBJAVA)
        aGSBJAVA.appendChild(txtGSBJAVA)
        ulProjets.appendChild(liJAVAANDROID)
        liJAVAANDROID.appendChild(aJAVAANDROID)
        aJAVAANDROID.appendChild(txtJAVAANDROID)
        ulProjets.appendChild(liPFC)
        liPFC.appendChild(aPFC)
        aPFC.appendChild(txtPFC)
        ulProjets.appendChild(liTESTPURETE)
        liTESTPURETE.appendChild(aTESTPURETE)
        aTESTPURETE.appendChild(txtTESTPURETE)
        ulProjets.appendChild(liQUIZLOL)
        liQUIZLOL.appendChild(aQUIZLOL)
        aQUIZLOL.appendChild(txtQUIZLOL)
        ulProjets.appendChild(liMORPION)
        liMORPION.appendChild(aMORPION)
        aMORPION.appendChild(txtMORPION)
        globalUl.appendChild(liRsxSociaux)
        liRsxSociaux.appendChild(aRsxSociaux)
        aRsxSociaux.appendChild(txtRsxSociaux)
        liRsxSociaux.appendChild(ulRsxSociaux)
        ulRsxSociaux.appendChild(liLinkedin)
        liLinkedin.appendChild(aLinkedin)
        aLinkedin.appendChild(txtALinkedin)
        ulRsxSociaux.appendChild(liGitHub)
        liGitHub.appendChild(aGitHub)
        aGitHub.appendChild(txtAGitHub)


        /////////////////////////////////////// CREATION AFFICHAGE LIEN ///////////////////////////////////////


        divProjects.appendChild(txtProjects)
        divGlobale.appendChild(divProjects)
        pGoalProject.appendChild(txtPGoal)
        divGlobale.appendChild(pGoalProject)
        pGoal.appendChild(pTxtGoal)
        divGlobale.appendChild(pGoal)
        divGlobale.appendChild(divImg)
        divArrowImg1.appendChild(divArrowPrevious)
        divImg.appendChild(divArrowImg1)
        divImg.appendChild(divImgProject)
        divImgProject.appendChild(aImg1)
        aImg1.appendChild(img1)
        divImgProject.appendChild(aImg2)
        aImg2.appendChild(img2)
        divImgProject.appendChild(aImg3)
        aImg3.appendChild(img3)
        divImgProject.appendChild(aImg4)
        aImg4.appendChild(img4)
        divImgProject.appendChild(aImg5)
        aImg5.appendChild(img5)
        divImgProject.appendChild(aImg6)
        aImg6.appendChild(img6)
        divImgProject.appendChild(aImg7)
        aImg7.appendChild(img7)
        divImgProject.appendChild(aImg8)
        aImg8.appendChild(img8)
        divImgProject.appendChild(aImg9)
        aImg9.appendChild(img9)
        divArrowImg2.appendChild(divArrowNext)
        divImg.appendChild(divArrowImg2)
        divGlobale.appendChild(divExpImg)
        divExpImg.appendChild(pTxtExpImg)
        pTxtExpImg.appendChild(txtExpImg)
        divGlobale.appendChild(divMarginBot)
        divMarginBot.appendChild(pTxtMarginBot)
        pTxtMarginBot.appendChild(txtMarginBot)
        var currentDiv = document.getElementById('body')
        document.body.insertBefore(divMenu, currentDiv)
        document.body.insertBefore(divGlobale, currentDiv)

        const nextArrow = document.getElementById('nextArrow')
        const previousArrow = document.getElementById('previousArrow')
        const images = document.querySelectorAll('.imgCurrent, .imgProject')
        var i = 0


        /////////////////////////////////////// FONCTION AFFICHER IMAGE NOUVELLE FENETRE ///////////////////////////////////////


        aImg1.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg1, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg2.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg2, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg3.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg3, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg4.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg4, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg5.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg5, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg6.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg6, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg7.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg7, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg8.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg8, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })

        aImg9.addEventListener('click', (e) => {
            e.preventDefault()
            window.open(aImg9, '_blank', 'location=yes,top=500px, left=500px, height=570,width=520,scrollbars=yes,status=yes')
        })


        /////////////////////////////////////// FONCTION FLECHE SUIVANTE IMAGE ///////////////////////////////////////


        nextArrow.addEventListener("click", () => {

            switch (i + 1) {
                case 1:
                    textExplicationImg = 'Exemple de question très facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 2:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : très facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 3:
                    textExplicationImg = 'Exemple de question facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 4:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 5:
                    textExplicationImg = 'Exemple de question difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 6:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 7:
                    textExplicationImg = 'Exemple de question très difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 8:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : très difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 9:
                    textExplicationImg = 'Page d\'acceuil du quiz'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                default:
                    textExplicationImg = 'test'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
            }

            // Affichage image suivante

            if (i < images.length - 1) {
                const quizlol = document.getElementById("quizlol" + i);
                quizlol.className = "imgCurrent"
                i++
                quizlol.className = 'imgProject'
                const quizlol1 = document.getElementById("quizlol" + i);
                quizlol1.className = "imgCurrent"
            } else {
                const quizlol1 = document.getElementById("quizlol" + i);
                quizlol1.className = "imgProject"
                i = 0
                const quizlol = document.getElementById("quizlol" + i)
                quizlol.className = "imgCurrent"
            }

        })


        /////////////////////////////////////// FONCTION FLECHE PRECEDENTE IMAGE ///////////////////////////////////////


        previousArrow.addEventListener("click", () => {

            switch (i - 1) {
                case 0:
                    textExplicationImg = 'Page d\'acceuil du quiz'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 1:
                    textExplicationImg = 'Exemple de question très facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 2:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : très facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 3:
                    textExplicationImg = 'Exemple de question facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 4:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : facile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 5:
                    textExplicationImg = 'Exemple de question difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 6:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case 7:
                    textExplicationImg = 'Exemple de question très difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                case -1:
                    textExplicationImg = 'Affichage de la fin de jeu en difficulté : très difficile'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
                    break;
                default:
                    textExplicationImg = 'test'
                    txtExpImg = document.createTextNode(`${textExplicationImg}`)
                    pTxtExpImg.innerHTML = ''
                    pTxtExpImg.appendChild(txtExpImg)
            }


            // Affichage image précedente

            if (i <= images.length - 1 && i > 0) {
                const quizlol = document.getElementById("quizlol" + i);
                quizlol.className = "imgCurrent"
                i--
                console.log(i)
                quizlol.className = 'imgProject'
                const quizlol1 = document.getElementById("quizlol" + i);
                quizlol1.className = "imgCurrent"
            } else if (i == 0) {
                const quizlol1 = document.getElementById("quizlol" + i);
                quizlol1.className = "imgProject"
                i = 8
                const quizlol = document.getElementById("quizlol" + i)
                quizlol.className = "imgCurrent"
            }

        })

    }
});
