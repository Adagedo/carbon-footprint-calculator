type CustomObject = {
	name: string;
	email: string;
	password: number;
	isAdmin: boolean;
};

class IterableObject {
	private data: CustomObject;
	constructor(data: CustomObject) {
		this.data = data;
	}
	[Symbol.iterator]() {
		const properties: string[] = Object.keys(this.data);
		let index: number = 0;

		return {
			next: () => {
				if (index < properties.length) {
					return { value: this.data[properties[index++]], done: false };
				} else {
					return { value: undefined, done: true };
				}
			},
		};
	}
}

const Users: CustomObject = {
	name: "adagedo",
	email: "ada@gmail.com",
	password: 12344,
	isAdmin: false,
};

const iteratorvalues = new IterableObject(Users);

for (const value of iteratorvalues) {
	console.log(value);
}

function factorial(number: number) {
	if (number === 0) {
		return 1;
	} else {
		return factorial(number - 1) * number;
	}
}

console.log(factorial(5));

const consoleLog: Console = {
	log: (props: any) => {
		return props;
	},
	error: (props: any) => {
		return props;
	},
	count: (props: any) => {
		return props.length;
	},

	assert: (condition: boolean, props: any) => {
		if (condition) {
			return props;
		} else {
			return null;
		}
	},
	time: (props: any) => {
		return props;
	},
	timeEnd: (props: any) => {
		return props;
	},
	timeLog: (label: string, props: any) => {
		return { label, props };
	},
};
