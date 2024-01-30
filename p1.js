const strOps = (str) => {
	let numSum = 0
	let strLength = 0

	str.split('').forEach((item) => {
		// if (!isNaN(item)) numSum = numSum + Number(item)
		if (item.match(/[0-9]/)) numSum = numSum + Number(item)
		else if (item.match(/[a-zA-z]/)) strLength = strLength + 1
	})

	return Math.round(numSum / strLength)
}

const str1 = 'Hello5,23-32,defge'
const str2 = '1o5,2e3d6fg9jhvjhv32s2'
// console.log(`str1 = ${str1} => `, strOps(str1))
// console.log(`str2 = ${str2} => `, strOps(str2))