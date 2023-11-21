import * as graphql from "@nestjs/graphql";
import { SimpleEntityResolverBase } from "./base/simpleEntity.resolver.base";
import { SimpleEntity } from "./base/SimpleEntity";
import { SimpleEntityService } from "./simpleEntity.service";

@graphql.Resolver(() => SimpleEntity)
export class SimpleEntityResolver extends SimpleEntityResolverBase {
  constructor(protected readonly service: SimpleEntityService) {
    super(service);
  }
}
