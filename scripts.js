const btns = document.querySelectorAll('button')
const s1 = document.getElementById('textChange1')
const s2 = document.getElementById('textChange2')
const s3 = document.getElementById('textChange3')

btns.forEach(e => {



    function hovered(j) {
        if (j.target.classList.contains('clicked')) {
            j.target.classList.add('whiteHovered')
        } else {
            j.target.classList.add('hovered')
            j.target.classList.remove('whiteHovered')
        }
    }


    function changeInformation(f) {

        function buttonColorChange(k) {

            k.target.classList = 'clicked'

        }

        function buttonBackgroundColorChange(b, l) {
            for (let i = 0; i < 3; i++) {
                if (b[i].id !== l) {
                    b[i].classList.remove('clicked')
                }
            }
        }


        const styles = f.target.id

        if (styles === 's1') {

            s1.classList.remove('hidden')

            buttonColorChange(f)

            buttonBackgroundColorChange(btns, styles)

            if (s2.classList !== 'hidden' && s3.classList !== 'hidden') {
                s2.classList.add('hidden')
                s3.classList.add('hidden')
            }

        } else if (styles === 's2') {

            s2.classList.remove('hidden')

            buttonColorChange(f)

            buttonBackgroundColorChange(btns, styles)

            if (s1.classList !== 'hidden' && s3.classList !== 'hidden') {
                s1.classList.add('hidden')
                s3.classList.add('hidden')
            }

        } else if (styles === 's3') {

            s3.classList.remove('hidden')

            buttonColorChange(f)

            buttonBackgroundColorChange(btns, styles)

            if (s1.classList !== 'hidden' && s2.classList !== 'hidden') {
                s1.classList.add('hidden')
                s2.classList.add('hidden')
            }

        }

    }

    e.addEventListener('click', changeInformation)
    e.addEventListener('mouseover', hovered)

})