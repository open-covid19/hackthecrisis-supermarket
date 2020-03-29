// Non normalized weights of a time distribution
const times = [
    { weight: 1,  t: '07:00' },
	{ weight: 1,  t: '07:30' },
	{ weight: 1,  t: '08:00' },
	{ weight: 1,  t: '08:30' },
	{ weight: 2,  t: '09:00' },
	{ weight: 4,  t: '09:30' },
	{ weight: 7,  t: '10:00' },
	{ weight: 8,  t: '10:30' },
	{ weight: 8,  t: '11:00' },
	{ weight: 4, t: '11:30' },
	{ weight: 1, t: '12:00' },
	{ weight: 1, t: '12:30' },
	{ weight: 1, t: '13:00' },
	{ weight: 2, t: '13:30' },
	{ weight: 4, t: '14:00' },
	{ weight: 8, t: '14:30' },
	{ weight: 10, t: '15:00' },
	{ weight: 10, t: '15:30' },
	{ weight: 8, t: '16:00' },
	{ weight: 3, t: '16:30' },
	{ weight: 1, t: '17:00' },
	{ weight: 1, t: '17:30' },
	{ weight: 1, t: '18:00' },
	{ weight: 4, t: '18:30' },
	{ weight: 4, t: '19:00' },
	{ weight: 4, t: '19:30' },
	{ weight: 2, t: '20:00' },
];
// Converts weights into a probability function
export function probability(times: any) {
    let total = times.reduce((acc: any, t:any) => acc + t.weight, 0);
    return times.map(((tim:any) => {return {weight: tim.weight / total, t: tim}}));
}
// Converts a probability function into the corresponding cumulative
// this assumes that the 't' are already sorted
export function cumulative(probs:any) {
     let c =  probs.reduce(
            (cumul: any, p:any) => cumul.concat([{c_weight: p.weight + cumul[cumul.length-1].c_weight, t: p.t.t}]),
            [{c_weight:0}]);
    return c.slice(1, c.length);
}
// Return a random sample t
export function sample_from(weights:any) {
    let cumul = cumulative(probability(weights));
    let r = Math.random();
    let chosen = cumul.filter((c: any) => c.c_weight > r)[0]
    return chosen.t
}

export function getRandomSlot(){
	return sample_from(times)
}