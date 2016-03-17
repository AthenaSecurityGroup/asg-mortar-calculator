const gravity = 9.81; // m/s^2

const radsToDegrees = (rads) => rads * (180 / Math.PI);

const getDistance = (easting, northing) =>
    10 * Math.sqrt(Math.pow(easting, 2) + Math.pow(northing, 2)); // m

const charges = new Map([
  ['c0', { maxRange: 490, velocity: 70 }],
  ['c1', { maxRange: 1900, velocity: 140 }],
  ['c2', { maxRange: 4000, velocity: 200 }]
]);

const getMuzzleVelocity = (distance) => {
  for (var [key, charge] of charges) {
    if (distance < charge.maxRange) return charge.velocity;
  }

  return NaN;
};

export function getBearing(targetEast, targetNorth, supportEast, supportNorth) {
  const easting = targetEast - supportEast;
  const northing = targetNorth - supportNorth;
  const majorBearing = easting < 0 ? 270 : 90; // degrees

  return majorBearing - radsToDegrees(Math.atan(northing/easting));
}

export function getCharge(targetEast, targetNorth, supportEast, supportNorth) {
  const easting = targetEast - supportEast;
  const northing = targetNorth - supportNorth;
  const distance = getDistance(easting, northing);

  for (var [key, charge] of charges) {
    if (distance < charge.maxRange) return key;
  }

  return '';
}

export function getRanging(targetEast, targetNorth, targetElev, supportEast, supportNorth, supportElev) {
  const easting = targetEast - supportEast;
  const northing = targetNorth - supportNorth;
  const distance = getDistance(easting, northing);
  const muzzleVelocity = getMuzzleVelocity(distance);
  const deltaElevation = targetElev - supportElev; // m

  // Angle required to hit coordinates: Trajectory of a projectile
  let math1 = gravity * Math.pow(distance, 2) + 2 * deltaElevation * Math.pow(muzzleVelocity, 2);
  let math2 = Math.abs(Math.pow(muzzleVelocity, 4) - gravity * math1);
  let math3 = Math.pow(muzzleVelocity, 2) + Math.sqrt(math2);
  let math4 = math3 / (gravity * distance);

  return radsToDegrees(Math.atan(math4));
}
