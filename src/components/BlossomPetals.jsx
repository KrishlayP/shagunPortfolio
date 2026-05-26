import { motion } from 'framer-motion';
import { petals } from '../data/portfolio';

export function BlossomPetals() {
  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.45,
            opacity: petal.opacity,
          }}
          animate={{
            y: ['-14vh', '116vh'],
            x: [0, petal.drift * 0.35, petal.drift, petal.drift * 0.45],
            rotate: [0, 95, 210, 340],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
