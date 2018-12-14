import { AbsoluteRepoFile, PositionSpec, toPrettyBlobURL } from '../../../../../shared/src/util/url'
import { repoUrlCache, sourcegraphUrl } from './context'

export function toAbsoluteBlobURL(ctx: AbsoluteRepoFile & Partial<PositionSpec>): string {
    const url = repoUrlCache[ctx.repoName] || sourcegraphUrl
    return `${url}/${toPrettyBlobURL(ctx)}`
}
