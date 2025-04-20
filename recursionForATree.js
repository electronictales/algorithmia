const catsFolder = [
	{
		type: 'folder',
		name: 'cats',
		children: [
			{
				type: 'image',
				name: 'Buffy',
			},
			{
				type: 'image',
				name: 'Luna',
			},
			{
				type: 'folder',
				name: 'small-cat',
				children: [
					{
						type: 'image',
						name: 'Solange',
					},
					{
						type: 'image',
						name: 'Orpheus',
					},
					{
						type: 'folder',
						name: 'black-cat',
						children: [
							{
								type: 'image',
								name: 'Delphine',
							},
							{
								type: 'image',
								name: 'Clippy',
							},
						],
					},
					{
						type: 'folder',
						name: 'white-cat',
						children: [
							{
								type: 'image',
								name: 'Jizon',
							},
							{
								type: 'image',
								name: 'Lucy',
							},
						],
					},
				],
			},
			{
				type: 'folder',
				name: 'future-cat',
				children: [],
			},
		],
	},
];

const catNamesArray = [];

function findCatNames(folder) {
	for (const object of folder) {
		if (/*  ¯\_(ツ)_/¯  */) {
			catNamesArray.push(object.name);
		} else {
			findCatNames(object.children);
		}
	}
}

findCatNames(catsFolder);
console.log(catNamesArray);
