import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SimpleEntityService } from "./simpleEntity.service";
import { SimpleEntityControllerBase } from "./base/simpleEntity.controller.base";

@swagger.ApiTags("simpleEntities")
@common.Controller("simpleEntities")
export class SimpleEntityController extends SimpleEntityControllerBase {
  constructor(
    protected readonly service: SimpleEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
