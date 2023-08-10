export const navVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        transition: {
            type: 'tween',
            // stiffness: 300,
            // damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            // stiffness: 80,
            // delay: 0.2,
        },
    },
};

export const navBoxVariants = {
    open: {
        opacity: 1, y: 0,
        transition: {
            delayChildren: 0.3,
            type: 'tween',
            duration: 0.5
        },
    },
    closed: {
        opacity: 0, y: "-100%",
        transition: {
            type: 'tween',
            duration: 1
        },
    },
}

// export const footerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//     transition: {
//       type: 'tween',
//       stiffness: 300,
//       damping: 140,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'tween',
//       stiffness: 80,
//       delay: 0.5,
//     },
//   },
// };

export const parentVariants = (delay: number) => ({
        open: {
            transition: {staggerChildren: 0.05, delayChildren: delay}
        },
        closed: {
            transition: {staggerChildren: 0.05, staggerDirection: -1}
        }
    }
);
export const childVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 25,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

export const parentVariants2 = (delay: number) => ({
        open: {
            transition: {staggerChildren: 0.3, delayChildren: delay}
        },
        closed: {
            transition: {staggerChildren: 0.1, staggerDirection: -1}
        }
    }
);
export const childVariants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 30,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

export const slideIn = (type: string, delay: number, duration: number, direction?: string,) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
        opacity: 0
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});


export const textVariant = (delay: number) => ({
    hidden: {
        y: -15,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
            delay,
        },
    },
});

// export const textVariant2 = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'tween',
//       ease: 'easeIn',
//     },
//   },
// };

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const fade = (type: string, delay: number, duration: number) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});


// export const zoomIn = (delay: number, duration: number) => ({
//   hidden: {
//     scale: 0,
//     opacity: 0,
//   },
//   show: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       type: 'tween',
//       delay,
//       duration,
//       ease: 'easeOut',
//     },
//   },
// });


export const framerError = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 10},
    transition: {duration: 0.2},
}