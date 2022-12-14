
import tech from './tech'
import projects from './projects'


// Singleton document type
import settings from './singletons/ settings'

const singletons = [settings]

// Object types
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'

const objects = [linkExternal, linkInternal]


export const schemaTypes = [...singletons, ...objects, tech, projects]