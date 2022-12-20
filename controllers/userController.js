import User from "../models/userSchema.js";

/*
@desc    Get all users
@route   GET /api/v1/users
*/

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


/*
@desc    Get a user by id
@route   GET /api/v1/user/:id
*/

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


/*
@desc    Create a user
@route   POST /api/v1/users
*/

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ message: `User ${user.name} created successfully`, newUser });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



/*
@desc    Update a user
 @route   PUT /api/v1/users/:id
*/

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true })
    res.status(200).json({ message: `user ${updatedUser.name} updated successfully`, updatedUser })

}


/*
@desc    Delete a user
@route   DELETE /api/v1/users/:id
*/

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(204).json({ message: `User ${deletedUser.name} deleted successfully` });
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}
