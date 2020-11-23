//! Animations

// The library supports:
//     fade
//     slide-up
//     slide-down
//     slide-left
//     slide-right
//     zoom-in
//     zoom-out
//     flip-up
//     flip-down
//     flip-left
//     flip-right

const animation = {
	slideUp1: {
		'data-sal': 'slide-up',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideUp2: {
		'data-sal': 'slide-up',
		'data-sal-delay': '500',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},

	slideUp3: {
		'data-sal': 'slide-up',
		'data-sal-delay': '600',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideUp3NoTrans: {
		'data-sal': 'slide-up',
		'data-sal-delay': '600',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},

	slideUp4: {
		'data-sal': 'slide-up',
		'data-sal-delay': '700',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideUp4NoTrans: {
		'data-sal': 'slide-up',
		'data-sal-delay': '700',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideUp5: {
		'data-sal': 'slide-up',
		'data-sal-delay': '800',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.25,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideUp6: {
		'data-sal': 'slide-up',
		'data-sal-delay': '900',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.25,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideUpLate: {
		'data-sal': 'slide-up',
		'data-sal-delay': '1000',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.5,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideDown1: {
		'data-sal': 'slide-down',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		transform: 'translateX(-125px)',
		transition: 'all .25ms ease-in',
	},
	slideDown2: {
		'data-sal': 'slide-down',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		transform: 'translateX(-125px)',
		transition: 'all .25ms ease-in',
	},
	slideInOutFromLeft: {
		'data-sal': 'slide-left',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideInOutFromRight: {
		'data-sal': 'slide-right',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideUpScrollDown: {
		'data-sal': 'slide-up',
		'data-sal-delay': '1000',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '1000',
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	slideLeft: {
		'data-sal': 'slide-left',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideLeftProjectIcon1: {
		'data-sal': 'slide-left',
		'data-sal-delay': '100',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideLeftProjectIcon2: {
		'data-sal': 'slide-left',
		'data-sal-delay': '200',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideLeftProjectIcon3: {
		'data-sal': 'slide-left',
		'data-sal-delay': '300',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideLeftProjectIcon4: {
		'data-sal': 'slide-left',
		'data-sal-delay': '400',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	slideLeftProjectIcon5: {
		'data-sal': 'slide-left',
		'data-sal-delay': '500',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
	},
	fadeSlow: {
		'data-sal': 'fade',
		'data-sal-delay': '1000',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '1000',
		// transition: 'all .25ms ease-in',
	},

	navIconSlideUp2: {
		'data-sal': 'slide-up',
		'data-sal-delay': '500',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.25,
		once: false,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},

	navIconSlideUp3: {
		'data-sal': 'slide-up',
		'data-sal-delay': '600',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.25,
		once: false,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},

	navIconSlideUp4: {
		'data-sal': 'slide-up',
		'data-sal-delay': '700',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.25,
		once: false,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
	navIconSlideUp5: {
		'data-sal': 'slide-up',
		'data-sal-delay': '800',
		'data-sal-easing': 'ease-out-back',
		'data-sal-duration': '500',
		threshold: 0.25,
		once: false,
		transform: 'translateX(125px)',
		transition: 'all .25ms ease-in',
	},
}

export default animation
