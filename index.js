// Your code here
// Create classes Cat, Dog, and Bird
class Cat {
	// Define constructor method that accepts name and sex parameters
	constructor(name, sex) {
		// Assign parameters to properties of this instance
		this.name = name
		this.sex = sex
	}

	// Define speak method that returns a string based on name property
	speak() {
		return `${this.name} says meow!`
	}
}

class Dog {
	// Define constructor method that accepts name and sex parameters
	constructor(name, sex) {
		// Assign parameters to properties of this instance
		this.name = name
		this.sex = sex
	}

	// Define speak method that returns a string based on name property
	speak() {
		return `${this.name} says woof!`
	}
}

class Bird {
	// Define constructor method that accepts name and sex parameters
	constructor(name, sex) {
		// Assign parameters to properties of this instance
		this.name = name
		this.sex = sex
	}

	// Define speak method that returns a conditional string based on name and sex properties
	speak() {
		if (this.sex === 'male') {
			// If male, return a specific string
			return `It's me! ${this.name}, the parrot!`
		} else {
			// If not male, return a generic string
			return `${this.name} says squawk!`
		}
	}
}
