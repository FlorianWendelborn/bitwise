import create from './create'
import modify from './modify'
import operations from './operations'
import read from './read'
import readCInt from './read-c-int'
import readInt from './read-int'
import readUInt from './read-u-int'

export default {
	...operations,
	create,
	modify,
	read,
	readCInt,
	readInt,
	readUInt,
}
