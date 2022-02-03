import mongoose from 'mongoose';
export const setupDatabase = function () {
	mongoose.connect(
		'mongodb+srv://developer:3opNTmQe1XFlkp3H@cluster0.vr4qv.mongodb.net/tabydb?retryWrites=true&w=majority'
	);
};
